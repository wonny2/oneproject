import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
    query fetchUseditem ($useditemId: ID!) {
        fetchUseditem (useditemId: $useditemId) {
            _id
            name
            remarks
            contents
            pickedCount
            images
        }
    }
`
export const TOGGLE_USED_ITEM_PICK = gql`
    mutation toggleUseditemPick($useditemId: ID!) {
        toggleUseditemPick(useditemId: $useditemId)
    }
`

export const FETCH_USED_ITEMS_I_PICKED = gql`
    query fetchUseditemsIPicked($page:Int, $search: String) {
        fetchUseditemsIPicked(page: $page, search: $search) {
            _id
        }
    }
`