import UsedItemsCommentListContainer from '../../bestUsedItemsComment/usedItemCommentList/usedItemsCommentList.container'
import CommentContainer from '../../boardComment/commentWrite/commentWrite.container'
import * as D from './bestUsedItemDetail.styles'
import { IBestUsedItemDetailPropsUI } from './bestUsedItemDetail.types'

export default function BestItemDetailPresenter(props: IBestUsedItemDetailPropsUI) {
    return(
        <D.Wrapper>
            <D.SecondeWrap>
                <D.ColumnWrap>
                    <D.Title>상품이름</D.Title>
                    <div>{props.data?.fetchUseditem.name}</div>
                </D.ColumnWrap>

                <D.ColumnWrap>
                    <D.Title>Remarks</D.Title>
                    <div>{props.data?.fetchUseditem.remarks}</div>
                </D.ColumnWrap>

                <D.ColumnWrap>
                    <D.Title>내용</D.Title>
                    <div>{props.data?.fetchUseditem.contents}</div>
                </D.ColumnWrap>
                <CommentContainer isBoard={false}/>
                <UsedItemsCommentListContainer />
            </D.SecondeWrap>
        </D.Wrapper>
    )
}
