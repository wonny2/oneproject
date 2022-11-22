import * as W from './boardWrite.styles'
import { IBoardsWritePropsUI } from './boardWrite.types'
import UploadContainer from '../../../commons/imageUpload/01/upload01.container'


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
                {props.fileUrls.map((el,index) => (
                    <UploadContainer 
                        key={index}
                        fileUrl = {el}
                        index={index}
                        onClickFileUrls={props.onClickFileUrls} // 이미지 배열
                    />
                ))}
                <button onClick={props.onClickCreateBoard}>등록하기</button>
            </W.SecondWrap>

        </W.Wrapper>
        
    )
}