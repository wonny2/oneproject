import { IBoardDetailUIProps } from "./boardDetail.types"
import * as D from './boardDetail.styles'
import {v4 as uuidv4} from 'uuid'
import CommentContainer from "../../boardComment/commentWrite/commentWrite.container"
import CommentListContainer  from "../../boardComment/commentList/commentList.container"


export default function BoardDetailPresenter(props: IBoardDetailUIProps) {
    return(
        <D.Wrapper>
            <D.SecondWrapper>
                <D.ColumnWrap>
                        <D.Text>제목 | TITLE</D.Text>
                        <div style={{padding: "16px 0" , border: "1px solid black"}}>{props.data?.fetchBoard.title}</div>
                </D.ColumnWrap>

                <D.ColumnWrap>
                    <D.Text>작성자</D.Text>
                    <div style={{border: "1px solid black", padding:"16px 0px"}} >{props.data?.fetchBoard.writer}</div>
                </D.ColumnWrap>

                <D.ColumnWrap>
                    <D.Text>내용</D.Text>
                    <div 
                        style={{border: "1px solid black"}}
                        dangerouslySetInnerHTML={{__html: String(props.data?.fetchBoard.contents) }} />
                </D.ColumnWrap>

                <D.ColumnWrap>
                    <D.Text>이미지</D.Text>
                    <D.ImgWrap>
                        {props.data?.fetchBoard.images?.filter(item => item).map((el) => (
                            <div key={uuidv4()}>
                                {el.includes('https://storage.googleapis.com/')
                                    ? <div></div>
                                    : <D.Img src={`https://storage.googleapis.com/${el}`} />
                                }
                            </div>
                        ))}
                    </D.ImgWrap>
                </D.ColumnWrap>
                <D.ButtonWrap>
                    <D.Button onClick={props.onClickUpdate}>수정하기</D.Button>
                    <D.Button onClick={props.onClickMoveToList}>목록으로</D.Button>
                    <D.Button onClick={props.onClickDelete}>삭제하기</D.Button>
                </D.ButtonWrap>
                <CommentContainer />
            <CommentListContainer />
            </D.SecondWrapper>
            
        </D.Wrapper>
    )
}