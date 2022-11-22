import * as W from './boardWrite.styles'
import { IBoardsWritePropsUI } from './boardWrite.types'




export default function BoardWritePresenter(props: IBoardsWritePropsUI) {


    return(
        <W.Wrapper>
            <W.SecondWrap>
                <W.ContentWrap>
                    <div>제목</div>
                    <input />
                </W.ContentWrap>

                <W.ContentWrap>
                    <div>태그</div>
                    <input />
                </W.ContentWrap>

                <W.ContentWrap>
                    <div>내용</div>
                    <W.Quill onChange={props.onChangeContents}/>
                </W.ContentWrap>

                <W.ContentWrap>
                    <W.ImgBox type='file' onChange={props.onChangFile}/>
                </W.ContentWrap>

            </W.SecondWrap>
        </W.Wrapper>
    )
}