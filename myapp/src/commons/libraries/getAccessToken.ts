// onError부분에서는 useQuery가 아직 안 되는 상태이기 때문에
// 

import { gql, GraphQLClient } from "graphql-request"


    // 새로운 accessToken 발급해주는 API
    const RESTORE_ACCESS_TOKEN = gql`
      mutation restoreAccessToken {
        restoreAccessToken {
          accessToken
        }
      }
`

export async function getAccessToken() {
    try{
        // 2-1 | refreshToken으로 accessToken재발급 받기 (restoreAccessToken API), 이 onError안에서는 useQuery나 mutation이 안 되기 때문
        const graphqlClient =  new GraphQLClient(
          'https://backend09.codebootcamp.co.kr/graphql',
          { credentials: 'include' });

        const result = await graphqlClient.request(RESTORE_ACCESS_TOKEN)
        
        // 새롭게 받은 accessToken임
        const newAccessToken = result.restoreAccessToken.accessToken // GraphqlClient는 result하고 data를 안 적어도 된다.
        return newAccessToken;

    } catch(error) {
        if(error instanceof Error){
            console.log(`여기서 나는 에러임! ${error}`)
        }
    }
}