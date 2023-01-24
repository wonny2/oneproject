import { gql } from "@apollo/client"

export const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
            title
            writer
            contents
            images
            createdAt
            likeCount
        }
    }
`

export const UPDATE_BOARD = gql`
    mutation updateBoard($updateBoardInput: UpdateBoardInput!, $password: String, $boardId: ID!) {
        updateBoard(updateBoardInput: $updateBoardInput, password: $password, boardId: $boardId) {
            _id
            title
            writer
            contents
            createdAt
            images
        }
    }
`

export const CREATE_USED_ITEM = gql`
    mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
        createUseditem(createUseditemInput: $createUseditemInput){
            _id
            name
            remarks
            contents
            price
            images
            pickedCount
            useditemAddress{
                address
                addressDetail
                zipcode
                lat
                lng
            }
        }
    }
`