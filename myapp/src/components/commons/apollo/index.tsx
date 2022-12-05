// app.tsx에 있던 apollo setting들을 굳이 나누는 이유는
// useRecoilState()를 사용하려면 <RecoilRoot></RecoilRoot> 안에서 사용이 가능하기 때문이다!


import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import {onError} from '@apollo/client/link/error'
import { createUploadLink } from "apollo-upload-client";
import { ReactNode } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/atom";


interface IApolloSettingProps {
    children: ReactNode;
}

export default function ApolloSetting(props: IApolloSettingProps) {
    
    const APOLLO_CACHE = new InMemoryCache()
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState)


    // onError는 Apollo-client/link에 있는 기능
    // error가 발생하면 이 함수가 활성화 된다.
    const errorLink = onError(({graphQLErrors , operation}) => {
      // Apollo를 활용한 useQuery, useMutation에 에러가 생길 때 이 부분이 실행된다. (axios는 상관이 없다.)

      // 1. 1단계 | 에러를 캐치하기


      // 2. 2단계 | refreshToken으로 accessToken재발급 받기

      // 3. 3단계 | 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기


    });


    // oper

  
    // apollo 업로드&인증 셋팅
    const uploadLink = createUploadLink({
      uri: "https://backend08.codebootcamp.co.kr/graphql",
      headers: { Authorization : `Bearer ${accessToken}` },
      credentials: "includes",    // credentials는 백엔드와 쿠키를 주고 받을 때 "쿠키에 담겨져 있는 내용은 중요하다."라고 알리는 기능. 이 부분이 있어야 백엔드에 전달이 된다.
    });
  
    // Apollo 기본셋팅
    const client = new ApolloClient({
      link: ApolloLink.from([errorLink, uploadLink]),
      cache: APOLLO_CACHE,
      connectToDevTools: true,
    })

    return(
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}

// props.children은 app.tsx에 global, layout,component이런 애들이 children에 들어오게 되는 것이다!!