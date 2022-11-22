import * as W from './boardWrite.styles'
import { IBoardsWritePropsUI } from './boardWrite.types'
import UploadContainer from '../../../commons/imageUpload/01/upload01.container'


export default function BoardWritePresenter(props: IBoardsWritePropsUI) {
    
    return(
        <W.Wrapper>
            <W.SecondWrap>
                <W.ContentWrap>
                    <div>제목</div>
                    <input placeholder='제목을 입력해주세요'/>
                </W.ContentWrap>

                <W.ContentWrap>
                    <div>태그</div>
                    <input placeholder='#태그를 입력해주세요'/>
                </W.ContentWrap>

                <W.ContentWrap>
                    <div>내용</div>
                    <W.Quill onChange={props.onChangeContents} />
                </W.ContentWrap>
                <W.Row>
                {props.fileUrls.map((el,index) => (
                    <UploadContainer 
                        key={index}
                        fileUrl = {el}
                        index={index}
                        onClickFileUrls={props.onClickFileUrls} // state변경 함수
                        />
                    ))}
                </W.Row>
                <W.SubmitBtn onClick={props.onClickCreateBoard}>등록하기</W.SubmitBtn>
            </W.SecondWrap>

        </W.Wrapper>
        
    )
}