import * as W from './boardWrite.styles'
import { IBoardsWritePropsUI } from './boardWrite.types'
import UploadContainer from '../../../commons/imageUpload/01/upload01.container'




export default function BoardWritePresenter(props: IBoardsWritePropsUI) {

    return(
        
        <W.Wrapper>
            <form onSubmit={props.handleSubmit(props.onClickCreateBoard)}>
            <W.SecondWrap>
                <W.ContentWrap>
                    <W.RowWrap>
                        <div>제목</div>
                        <W.ErrorMsg>{props.formState.errors.title?.message}</W.ErrorMsg>
                    </W.RowWrap>
                    <input
                        {...props.register("title")}
                        type="text"
                        placeholder='제목을 입력해주세요'/>
                </W.ContentWrap>

                <W.ContentWrap>
                    <W.RowWrap>
                        <div>태그</div>
                        <W.ErrorMsg>{props.formState.errors.writer?.message}</W.ErrorMsg>
                    </W.RowWrap>
                    <input
                        {...props.register("writer")}
                        type="text"
                        placeholder='#태그를 입력해주세요'/>
                </W.ContentWrap>

                <W.ContentWrap>
                    <W.RowWrap>
                        <div>내용</div>
                        <W.ErrorMsg>{props.formState.errors.contents?.message}</W.ErrorMsg>
                    </W.RowWrap>
                    <W.Quill onChange={props.onChangeContents} />

                </W.ContentWrap>
                <W.ImgRowWrap>
                {props.fileUrls.map((el,index) => (
                    <UploadContainer 
                        key={index}
                        fileUrl = {el}
                        index={index}
                        onClickFileUrls={props.onClickFileUrls} // state변경 함수
                        />
                    ))}
                </W.ImgRowWrap>
                <div>{props.formState.errors.images?.message}</div>
                <W.SubmitBtn>등록하기</W.SubmitBtn>
            </W.SecondWrap>
            </form>
        </W.Wrapper>
    )
}