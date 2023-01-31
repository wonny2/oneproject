import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
    mutation createUseditem($createUseditemInput:CreateUseditemInput! ) {
        createUseditem(createUseditemInput: $createUseditemInput) {
            _id
            name
            contents
            price
            remarks
            images
            # useditemAddress{
            #    zipcode
            #    address
            #    addressDetail
            #    lat
            #    lng
            # }
        }
    }
`

export const UP_LOAD_FILE = gql`
    mutation uploadFile($file:Upload!) {
        uploadFile(file: $file) {
            url
            createdAt
        }
    }
`