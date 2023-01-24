import * as W from './boardWrite.styles'
import { IBoardsWritePropsUI } from './boardWrite.types'
import UploadContainer from '../../../commons/imageUpload/01/upload01.container'
import { Button, Modal } from 'antd';
import { DaumPostcodeEmbed} from 'react-daum-postcode';
export default function BoardWritePresenter(props: IBoardsWritePropsUI) {

    return(
        
        <W.Wrapper>
            <form onSubmit={props.handleSubmit(props.isEdit ? props.onClickUpdate : props.onClickCreateUsedItem)}>
            <W.SecondWrap>
                <W.ContentWrap>
                    <W.Title>{props.isEdit ? '수정하기' : '등록하기'}</W.Title>
                    <W.RowWrap>
                        <div>상품이름</div>
                        <W.ErrorMsg>{props.formState.errors.title?.message}</W.ErrorMsg>
                    </W.RowWrap>
                    <input
                        {...props.register("name")}
                        type="text"
                        placeholder='상품 이름을 입력해주세요'
                        defaultValue={props.data?.fetchBoard.title || ""}
                        />
                </W.ContentWrap>

                <W.ContentWrap>
                    <W.RowWrap>
                        <div>Remarks</div>
                        <W.ErrorMsg>{props.formState.errors.writer?.message}</W.ErrorMsg>
                    </W.RowWrap>
                    <input
                        {...props.register("remarks")}
                        type="text"
                        placeholder='Remarks을 입력해주세요'
                        defaultValue={props.data?.fetchBoard.writer || ""}
                        />
                </W.ContentWrap>

                <W.ContentWrap>
                    <W.RowWrap>
                        <div>가격</div>
                        <W.ErrorMsg>{}</W.ErrorMsg>
                    </W.RowWrap>
                    <input
                        {...props.register("price")}
                        type="text"
                        placeholder='가격을 입력해주세요'
                        defaultValue={props.data?.fetchBoard.writer || ""}
                        />
                </W.ContentWrap>
                
                <W.AddressWrap>
                    <W.ZipWrap>
                        <W.Zipcode>{props.zipcode}</W.Zipcode>
                        <W.Btn onClick={props.onClickOpenModal}>주소 검색</W.Btn>
                    </W.ZipWrap>
                    {props.openModal
                        ?   <Modal open={props.openModal} onCancel={props.onClickOpenModal} onOk={props.onClickOpenModal}>
                                <DaumPostcodeEmbed 
                                    onClose={props.onClickOpenModal}
                                    style={{padding: "0px 15px"}}
                                    onComplete={props.addressInfo} />
                            </Modal>
                        : <></> 
                    }
                    <W.Address>{props.address}</W.Address>
                    <W.AddressDetail
                        {...props.register("addressDetail")}
                        placeholder='상세 주소를 입력해주세요'
                        type='text' />
                </W.AddressWrap>

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