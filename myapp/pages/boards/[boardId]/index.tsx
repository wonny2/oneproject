import BoardDetailContainer from "../../../src/components/units/board/detail/boardDetail.container";
import CommentListContainer from "../../../src/components/units/boardComment/commentList/commentList.container";
import CommentContainer from "../../../src/components/units/boardComment/commentWrite/commentWrite.container";

export default function BoardDetailPage() {
    return(
        <>
        <div style={{display: "flex", flexDirection:"column"}}>
            <BoardDetailContainer />
            <CommentContainer />
            <CommentListContainer />
        </div>
        </>
    )
}