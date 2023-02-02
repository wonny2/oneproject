import UsedItemsCommentListContainer from '../../bestUsedItemsComment/usedItemCommentList/usedItemsCommentList.container'
import CommentContainer from '../../boardComment/commentWrite/commentWrite.container'
import * as D from './bestUsedItemDetail.styles'
import { IBestUsedItemDetailPropsUI } from './bestUsedItemDetail.types'

export default function BestItemDetailPresenter(props: IBestUsedItemDetailPropsUI) {

    return(
        <D.Wrapper>
            <D.SecondeWrap>
                <D.ColumnWrap>
                    <D.PickedWrap>
                        <D.Title>상품이름</D.Title>
                        <D.HeartIcon
                            onClick={props.onClickPicked}
                            // #eb2f96
                            twoToneColor={props.pickedColor ? "blue" : "lightgray"} />
                    </D.PickedWrap>
                    <D.Contents>{props.data?.fetchUseditem.name}</D.Contents>
                </D.ColumnWrap>

                <D.ColumnWrap>
                    <D.Title>Remarks</D.Title>
                    <D.Contents>{props.data?.fetchUseditem.remarks}</D.Contents>
                </D.ColumnWrap>

                <D.ColumnWrap>
                    <D.Title>내용</D.Title>
                    <D.Contents dangerouslySetInnerHTML={{__html: String(props.data?.fetchUseditem.contents) }} />
                </D.ColumnWrap>

                <D.RowWrap>
                    <D.Button onClick={props.MoveToList}>목 록 으 로</D.Button>
                </D.RowWrap>

                <CommentContainer isBoard={false}/>
                <UsedItemsCommentListContainer />
            </D.SecondeWrap>
        </D.Wrapper>
    )
}
