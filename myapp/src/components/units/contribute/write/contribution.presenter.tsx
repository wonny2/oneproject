import * as W from './contribution.styles'
import { IContributePresenter } from './contribution.types'
import { priceTag } from "../../../../commons/utils/utils";
import Upload02Container from '../../../commons/imageUpload/02/upload02.container';
import {Tooltip} from 'antd'

export default function ContributionPresenter(props: IContributePresenter){

    return(
            <W.Wrapper>
                <W.BackImg>
                    <div>긴 급 후 원 신 청</div>
                </W.BackImg>
                <form onSubmit={props.handleSubmit(props.onCreateContribution)}>
                <W.SecondWrap>
                <Tooltip placement="left" title={"뒤 로 가 기"}>
                    <W.Icon>
                        <img src='/images/backarrow.png' onClick={props.MoveToBack} />
                    </W.Icon>
                </Tooltip>
                    <W.ContentsWrap>
                        <W.Title>제목</W.Title>
                        <W.Error>{props.formState.errors.remarks?.message}</W.Error>
                        <W.Input 
                            {...props.register("remarks")}
                            placeholder='제목을 입력해주세요' 
                            type='text' />
                    </W.ContentsWrap>
                    <W.ContentsWrap>
                        <W.Title>이름</W.Title>
                        <W.Error>{props.formState.errors.name?.message}</W.Error>
                        <W.Input 
                            {...props.register("name")}
                            placeholder='이름을 입력해주세요'
                            type='text' />
                    </W.ContentsWrap>

                    <W.ContentsWrap>
                        <W.Title>내용</W.Title>
                        <W.Contents 
                            placeholder='내용을 입력해주세요'/>
                    </W.ContentsWrap>
                
                    <W.PriceWrap>
                        <W.Title>후원 요청 금액</W.Title>
                        <W.Error>{props.priceError}</W.Error>
                        <W.PriceRowWrap>
                            <W.Sliders
                                min={0} 
                                max={100000} 
                                onChange={props.onChangePrice}
                                // value={props.price} 
                                step={100}
                                tooltip={{open: false}} />
                            <W.Price>
                                {priceTag(props.price)}
                                <div>원</div>
                            </W.Price>
                        </W.PriceRowWrap>
                        <W.InfoMsg>키보드 좌,우키로 가격 설정이 가능합니다.</W.InfoMsg>
                    </W.PriceWrap>

                    <W.AddressWrap>
                            <W.Title>주소</W.Title>
                            <W.Error>{props.addressError}</W.Error>
                        <W.ZipWrap>
                            <W.Zipcode>{props.zipcode}</W.Zipcode>
                            <W.AddressBtn onClick={props.onModalOnOff}>주소 검색</W.AddressBtn>
                        </W.ZipWrap>
                    {props.openModal
                        ?   <W.DaumModal open={props.openModal} onCancel={props.onModalOnOff} onOk={props.onModalOnOff}>
                                <W.DaumAddess 
                                    onClose={props.onModalOnOff}
                                    style={{padding: "0px 15px"}}
                                    onComplete={props.addressInfo} />
                            </W.DaumModal>
                        : <></> 
                    }
                    <W.Address>{props.address}</W.Address>
                    <W.AddressDetail
                        {...props.register("addressDetail")}
                        placeholder='상세 주소를 입력해주세요'
                        type='text' />
                    <W.Error>{props.formState.errors.addressDetail?.message}</W.Error>
                    </W.AddressWrap>
                <W.ContentsWrap>
                    <W.Title>이미지 등록</W.Title>
                    <W.ImgWrap>
                    {props.fileUrls.map((el,index) => (
                        <Upload02Container 
                            key={index}
                            index={index}
                            onClickFileUrls={props.onClickFileUrls}
                            fileUrl={el}
                        />
                    ))}
                    </W.ImgWrap>
                </W.ContentsWrap>

                    <W.EnrollBtn >등 록 하 기</W.EnrollBtn>
                </W.SecondWrap>
                </form>
            </W.Wrapper>
    )
};

// // isActive={props.formState.isValid}
