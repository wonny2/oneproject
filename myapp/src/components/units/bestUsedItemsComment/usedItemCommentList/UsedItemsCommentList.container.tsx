import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { CREATE_USED_ITEM_QUESTION, FETCH_USED_ITEM_QUESTIONS } from "./UsedItemsCommentList.queries";
import BestUsedItemsCommentPresenter from './UsedItemsCommentList.presenter'
import { useRouter } from "next/router";
import { IQuery, IQueryFetchUseditemQuestionsArgs } from "../../../../commons/types/generated/types";

export default function UsedItemsCommentListContainer() {
    // const [createUseditemQuestionAnswer] = useMutation(CREATE_USED_ITEM_QUESTION);

    const router = useRouter();

    const {data, fetchMore} = useQuery<Pick<IQuery,'fetchUseditemQuestions'>,IQueryFetchUseditemQuestionsArgs>(FETCH_USED_ITEM_QUESTIONS,{
        variables: {useditemId: String(router.query.useditemId)}
    });

    // const [answerOpen, setAnswerOpen] = useState(false);


    // const openQuestionAnswer = () => {
    //     setAnswerOpen((prev) => !prev);
    // }

    // 베스트 댓글
    const onLoadMore = () => {
        if(!data) return;

        fetchMore({
            variables: {page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1},
            updateQuery : (prev, {fetchMoreResult}) => {
                if(!fetchMoreResult?.fetchUseditemQuestions)
                    return {fetchUseditemQuestions : [...prev.fetchUseditemQuestions]}

                return {
                    fetchUseditemQuestions: [
                        ...prev.fetchUseditemQuestions,
                        ...fetchMoreResult.fetchUseditemQuestions
                    ]
                }
            }
        });
    };




        // 대댓글API
        // const onClickQuestionAnswer = async () => {
        //     console.log("대댓글");
    
        //     try{
        //         const result = await createUseditemQuestionAnswer({
        //             variables : {createUseditemQuestionAnswerInput : {
        //                 contents:"대댓글입니다."
        //             },
        //                 useditemQuestionId: props.el._id
        //         }
        //         })
        //         console.log(result.data.createUseditemQuestionAnswer)
        //     } catch(error){
        //         if(error instanceof Error) {
        //             alert(error.message)
        //         }
        //     };
        // };

        

    return(

            <BestUsedItemsCommentPresenter 
                data={data}
                onLoadMore={onLoadMore}
            />

    )
}