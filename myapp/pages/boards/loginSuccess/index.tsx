import { gql, useQuery } from "@apollo/client"
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

    return(
        <div>{data?.fetchUserLoggedIn.name}님 환영합니다!</div>
    )
}