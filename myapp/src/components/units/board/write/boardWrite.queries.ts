import { gql } from "@apollo/client"


export const UP_LOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
            url
            createdAt
        }
    }
`

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