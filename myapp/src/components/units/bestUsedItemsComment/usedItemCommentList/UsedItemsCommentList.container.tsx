import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM_QUESTIONS } from "./usedItemsCommentList.queries";
import BestUsedItemsCommentPresenter from "./usedItemsCommentList.presenter";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchUseditemQuestionsArgs } from "../../../../commons/types/generated/types";

export default function UsedItemsCommentListContainer() {

    const router = useRouter();

    const {data, fetchMore} = useQuery<Pick<IQuery,'fetchUseditemQuestions'>,IQueryFetchUseditemQuestionsArgs>(FETCH_USED_ITEM_QUESTIONS,{
        variables: {useditemId: String(router.query.useditemId)}
    });


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
                    ],
                };
            },
        });
    };
        

    return(

            <BestUsedItemsCommentPresenter 
                data={data}
                onLoadMore={onLoadMore}
            />

    )
}