// app.tsx에 있던 apollo setting들을 굳이 나누는 이유는
// useRecoilState()를 사용하려면 <RecoilRoot></RecoilRoot> 안에서 사용이 가능하기 때문이다!


import { ApolloClient, ApolloLink, ApolloProvider, fromPromise, gql, InMemoryCache } from "@apollo/client";
import {onError} from '@apollo/client/link/error'
import { createUploadLink } from "apollo-upload-client";
import { useEffect , ReactNode } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/atom";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";



interface IApolloSettingProps {
    children: ReactNode;
}

const APOLLO_CACHE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps) {
    

    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);


// 이 부분이 있어야 로그인 후 새로고침 할 때 state값이 안 날라감!!!
// 프리렌더링이 이루워질 때에는 LocalStorage(브라우저영역)가 존재하지 않기 때문에 오류가 발생함
// 브라우저에서 페이지가 새로고침시에 해당 코드가 실행되도록..!
useEffect(() => {
  getAccessToken().then((newAccessToken) => {
    setAccessToken(newAccessToken);
  });
}, []);


const errorLink = onError(({graphQLErrors , operation, forward}) => {
      // Apollo를 활용한 useQuery, useMutation에 에러가 생길 때 이 부분이 실행된다. (axios는 상관이 없다.)

      // 1-1. 1단계 | 에러를 캐치하기
      if(graphQLErrors){ // 배열형태로 error가 들어온다.
        for(const err of graphQLErrors){

          // 1-2. 해당 에러가 토큰 만료 에러인지 체크하기
            if(err.extensions.code === "UNAUTHENTICATED"){ // err.extensions안에 .code가 있는 것. ==>  ex) result.data.fetchBoards.code 처럼 비슷한 형태임
              return fromPromise(   // fromPromise는 promise를 ==> observable로 바꾸는 기능!
              // 분리했던 2-1을 여기서 다시 소환
            getAccessToken().then((newAccessToken) => {
            
              // 2-2 | 재발급 받은 accessToken 저장하기(Recoil로 global state에 저장)
             setAccessToken(newAccessToken);
  
             // 3. 3단계 | 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
                    //  operation.getContext().headers // 기존의 headers 안에 있는 정보 불러오기, => 만료된 토큰이 headers에 저장되어 있는 상태임
                     operation.setContext({ // header에 새로운 토큰을 넣어주기.
                       headers : {
                         ...operation.getContext().headers, // header부분에 accessToken말고도 다른 정보들이 있고, 다른 정보들은 건들이지 않고, 만료된 토큰만 새롭게 변경하기 위해서 일단 기존 header를 전체 복사한 후, accessToken만 바꿔주기!!!!
                         Authorization : `Bearer ${newAccessToken}`,
                       },
                     });
                 }
              )).flatMap(() => forward(operation))   // 3-2 변경된 operation 재요청하기
            };
          };
        };
    });


    //graphQLErrors: / operation: 방금 실패한 쿼리(그 잡채) / forward: operation을 가지고 재발급
    // graphQLErrors은 이 안에 error들이 있는지 찾고, 찾아서 있으면 accessToken을 재발급 받아서 operation에 새token을 등록해줌, forward안에 operation을 다시 넣어서 refresh된다!!

  
    // apollo 업로드&인증 셋팅 
    const uploadLink = createUploadLink({
      uri: "https://backend09.codebootcamp.co.kr/graphql",
      credentials: "include",    // credentials는 백엔드와 쿠키를 주고 받을 때 "쿠키에 담겨져 있는 내용은 중요하다."라고 알리는 기능. 이 부분이 있어야 백엔드에 전달이 된다.
      headers: { Authorization : `Bearer ${accessToken}` },
    });
  

    // Apollo 기본셋팅, client는 Apollo-setting의 완료부분
    const client = new ApolloClient({
      link: ApolloLink.from([errorLink, uploadLink]),
      cache: APOLLO_CACHE,
      connectToDevTools: true,
    });
    
    return(
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}

// props.children은 app.tsx에 global, layout,component이런 애들이 children에 들어오게 되는 것이다!!록