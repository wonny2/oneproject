import {IPresenterItemsProps} from './UsedItemsCommentList.types'
import * as C from './UsedItemsCommentList.styles'

export default function UsedItemsCommentPresenterItems(props:IPresenterItemsProps) {
    
    return(
        <C.Wrapper>
            <C.ContentsWrap>
                <C.Title>댓글</C.Title>
                <C.ColumnWrap>
                    <div>{props.el._id}</div>
                    <div>{props.el.contents}</div>
                </C.ColumnWrap>
            </C.ContentsWrap>
        </C.Wrapper>
    )
}