import * as W from './boardWrite.styles'
import { IBoardsWritePropsUI } from './boardWrite.types'
import UploadContainer from '../../../commons/imageUpload/01/upload01.container'




export default function BoardWritePresenter(props: IBoardsWritePropsUI) {

    return(
        
        <W.Wrapper>
            <form onSubmit={props.handleSubmit(props.isEdit ? props.onClickUpdate : props.onClickCreateBoard)}>
            <W.SecondWrap>
                <W.ContentWrap>
                    <W.Title>{props.isEdit ? '수정하기' : '등록하기'}</W.Title>
                    <W.RowWrap>
                        <div>제목</div>
                        <W.ErrorMsg>{props.formState.errors.title?.message}</W.ErrorMsg>
                    </W.RowWrap>
                    <input
                        {...props.register("title")}
                        type="text"
                        placeholder='제목을 입력해주세요'
                        defaultValue={props.data?.fetchBoard.title || ""}
                        />
                </W.ContentWrap>

                <W.ContentWrap>
                    <W.RowWrap>
                        <div>작성자</div>
                        <W.ErrorMsg>{props.formState.errors.writer?.message}</W.ErrorMsg>
                    </W.RowWrap>
                    <input
                        {...props.register("writer")}
                        type="text"
                        placeholder='작성자를 입력해주세요'
                        defaultValue={props.data?.fetchBoard.writer || ""}
                        />
                </W.ContentWrap>

                <W.ContentWrap>
                    <W.RowWrap>
                        <div>내용</div>
                        <W.ErrorMsg>{props.formState.errors.contents?.message}</W.ErrorMsg>
                    </W.RowWrap>
                    <W.Quill
                        onChange={props.onChangeContents}
                        defaultValue={props.data?.fetchBoard.contents || ""}
                        placeholder="내용을 입력해주세요"
                        />

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
                <W.ButtonWrap>
                    <W.Buttons onClick={props.MoveToList}>목 록 으 로</W.Buttons>
                    <W.Buttons>{props.isEdit ? '수 정 하 기' : '등 록 하 기'}</W.Buttons>
                </W.ButtonWrap>

            </W.SecondWrap>
            </form>
        </W.Wrapper>
    )
}