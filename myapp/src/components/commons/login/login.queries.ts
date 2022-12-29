import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation loginUser($password: String!, $email: String!){
        loginUser(password: $password, email: $email){
            accessToken
        }
    }
`

// export const LOGIN_USER_EXAMPLE = gql`
//     mutation loginUserExample ($password: String!, $email: String!) {
//         loginUserExample (password: $password, email: $email) {
//             accessToken
//         }
//     }
// `