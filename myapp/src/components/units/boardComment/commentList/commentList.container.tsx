import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router";
import { IQuery, IQueryFetchBoardCommentsArgs, IQueryFetchUseditemQuestionsArgs } from "../../../../commons/types/generated/types";
import CommentListPresenter from "./commentList.presenter";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS, FETCH_USED_ITEM_QUESTIONS } from "./commentList.queries"


interface CommentListProps {
    isBoard: boolean
}


export default function CommentListContainer(props:CommentListProps) {

    const router = useRouter();

    const {data, fetchMore}= useQuery<Pick<IQuery,"fetchBoardComments">,IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS,
        {
            variables: { boardId: String(router.query.boardId)}
        });

    // infinite Scroll
    const onLoadMore =  () => {
        if(!data) return;
            fetchMore({
                variables: {page: Math.ceil(data?.fetchBoardComments.length / 10) + 1},
                updateQuery: (prev, {fetchMoreResult}) => {
                    if(!fetchMoreResult?.fetchBoardComments) 
                        return {fetchBoardComments : [...prev.fetchBoardComments]};
                        
                    return {
                        fetchBoardComments: [
                            ...prev.fetchBoardComments,
                            ...fetchMoreResult.fetchBoardComments
                        ],
                    };
                },
            })
    };
    

    return(
        <CommentListPresenter
            data={data}
            onLoadMore={onLoadMore}
            isBoard={props.isBoard}
        />
    )
}