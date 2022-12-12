import * as C from './commentWrite.styles'
import { ICommentWriteUI } from './commentWrite.types'
import { Rate } from 'antd'

export default function CommentPresenter(props:ICommentWriteUI) {
    
    return(
        <C.Wrapper>
            <form onSubmit={props.handleSubmit(props.isBoard ? props.onClickCreateComment : props.onClickUsedItemQuestion)}>
                <div>{props.isBoard ? "게시글 댓글 작성하기" : "중고상품 댓글 작성하기"}</div>
        {props.isBoard && 
        <>
            <C.ColumnWrap>
                <C.Text>작성자</C.Text>
                <C.Input type='text' {...props.register("writer")} />
            </C.ColumnWrap>

            <C.ColumnWrap>
                <C.Text>비밀번호</C.Text>
                <C.Input type='password' {...props.register("password")}/>
            </C.ColumnWrap>

        
            <C.ColumnWrap>
                <C.Text>별점</C.Text>
                <Rate allowHalf onChange={props.onChangeRate} defaultValue={0}/>
                {/* <C.Input type='number' {...props.register("rating")}/> */}
            </C.ColumnWrap>
            </>
        }

            <C.ColumnWrap>
                <C.Text>내용</C.Text>
                <C.Contents type='text' {...props.register("contents")}/>
            </C.ColumnWrap>
                <button>댓글 등록하기</button>
            </form>
        </C.Wrapper>
    )
}