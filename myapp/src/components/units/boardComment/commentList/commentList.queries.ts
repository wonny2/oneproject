import { gql } from "@apollo/client";

export const FETCH_BOARD_COMMENTS = gql`
    query fetchBoardComments($page: Int, $boardId: ID!) {
        fetchBoardComments(page: $page, boardId: $boardId){
            _id
            writer
            contents
            rating
            createdAt
        }
    }
`

export const DELETE_BOARD_COMMENT = gql`
    mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
        deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
    }
`

export const UPDATE_BOARD_COMMENTS = gql`
    mutation updateBoardComment($updateBoardCommentInput: UpdateBoardCommentInput!, $password: String, $boardCommentId: ID!) {
        updateBoardComment(updateBoardCommentInput: $updateBoardCommentInput, password: $password, boardCommentId: $boardCommentId) {
            _id
            writer
            contents
            createdAt
        }
    }
`

//베스트 중고아이템

export const FETCH_USED_ITEM_QUESTIONS = gql`
    query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
        fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
            _id
            contents
        }
    }
`