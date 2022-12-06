import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
    query fetchBoards($startDate: DateTime, $endDate: DateTime, $page: Int) {
        fetchBoards(startDate: $startDate, endDate: $endDate, page: $page) {
            _id
            Title
            writer
            contents
            createdAt
        }
    }
`