import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
    query fetchUseditems($page: Int) {
        fetchUseditems(page: $page) {
            _id
            name
            remarks
            contents
            price
            pickedCount
            images
            createdAt
            seller{
                name
            }
    }
}
`