import InfiniteScroll from "react-infinite-scroller";
import { ICommentListPropsUI } from "./commentList.types";
import {v4 as uuidv4} from 'uuid'
import ModalContainer from "../../../commons/modal/modal.container";
import CommentListItemsPresenter from "./commentList.presenterItems";

// 이 곳은 댓글 리스트만!!
export default function CommentListPresenter(props:ICommentListPropsUI) {
    
    return(
        <>
            <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
            <div>댓글 갯수 : {props.data?.fetchBoardComments.length}</div>
                {props.data?.fetchBoardComments.map((el) => (
                        <CommentListItemsPresenter 
                            key={uuidv4()}
                            el={el}
                            // onClickDeleteComment={props.onClickDeleteComment}
                            />
                    ))}
            </InfiniteScroll>

        </>
    )
}