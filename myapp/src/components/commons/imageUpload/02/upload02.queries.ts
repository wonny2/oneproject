import { gql } from "@apollo/client";

export const UP_LOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file){
            url
        }
    }
`