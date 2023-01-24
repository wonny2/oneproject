import { gql } from "@apollo/client"

export const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
        fetchBoards(page: $page) {
            _id
            title
            writer
            createdAt
            images
        }
    }
`

export const FETCH_USED_ITEMS = gql`
    query fetchUseditems($page: Int) {
        fetchUseditems(page: $page) {
            _id
            contents
            name
            pickedCount
            images
            createdAt
        }
    }
`

// query fetchUseditems($page: Int) {
//     fetchUseditems(page: $page){
//         _id
//     }
// }