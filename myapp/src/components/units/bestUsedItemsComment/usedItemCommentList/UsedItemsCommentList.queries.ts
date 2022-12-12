import { gql } from "@apollo/client";

//베스트 중고아이템 댓글
export const FETCH_USED_ITEM_QUESTIONS = gql`
    query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
        fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
            _id
            contents
            user{
                name
            }
        }
    }
`

export const CREATE_USED_ITEM_QUESTION_ANSWER = gql`
    mutation createUseditemQuestionAnswer($createUseditemQuestionAnswerInput:CreateUseditemQuestionAnswerInput!, $useditemQuestionId: ID! ) {
        createUseditemQuestionAnswer(createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput, useditemQuestionId: $useditemQuestionId) {
            _id
            contents
        }
    }
`

export const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
    query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
        fetchUseditemQuestionAnswers(page: $page, useditemQuestionId: $useditemQuestionId) {
            _id
            contents
            createdAt
            user{
                name
            }
        }
    }
`