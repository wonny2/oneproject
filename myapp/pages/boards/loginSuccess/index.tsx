import { gql, useApolloClient, useQuery } from "@apollo/client"
import { accessTokenState } from "../../../src/commons/atom"
import { IQuery } from "../../../src/commons/types/generated/types"

const FETCH_USER_LOGGED_IN = gql`
        query fetchUserLoggedIn {
            fetchUserLoggedIn {
                _id
                email
                name
            }
        }
`

export default function LoginSuccessPage() {

    const {data} = useQuery<Pick<IQuery,'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)

    const client = useApolloClient()

    const onClickButton = async () => {
        const result = await client.query({
            query: FETCH_USER_LOGGED_IN
        })
        console.log(result)
    };

    return(
        // <div>{data?.fetchUserLoggedIn.name}님 환영합니다!</div>
        <button onClick={onClickButton}>버튼을 클릭하세요</button>
    )
}


// 
// useApolloClient는
// 특정 버튼을 클릭해서 특정 api를 실행시키고 싶을 때 사용한다.