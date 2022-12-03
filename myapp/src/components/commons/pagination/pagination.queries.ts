import { gql } from "@apollo/client"

export const FETCH_BOARDS = gql`
    query fetchBoards($page: Int, $search: String) {
        fetchBoards(page: $page, search: $search){
            _id
            title
            writer
            contents
        }
    }
`



export const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount($search: String){
        fetchBoardsCount(search: $search)
    }
`