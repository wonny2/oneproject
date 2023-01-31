import * as W from './contribution.styles'

export default function ContributionPresenter(){
    return(
        <>
            <W.Wrapper>
                <W.BackImg>
                    <div>Enroll</div>
                </W.BackImg>

                <W.SecondWrap>
                    <W.ContentsWrap>
                        <W.Title>제목</W.Title>
                        <W.Input placeholder='제목을 입력해주세요' type='text' />
                    </W.ContentsWrap>
                    <W.ContentsWrap>
                        <W.Title>이름</W.Title>
                        <W.Input placeholder='이름을 입력해주세요' type='text' />
                    </W.ContentsWrap>

                    <W.ContentsWrap>
                        <W.Title>내용</W.Title>
                        <W.Contents placeholder='내용을 입력해주세요'/>
                    </W.ContentsWrap>

                    <W.AddressWrap>
                    <W.RowWrap>
                        <div>주소</div>
                    </W.RowWrap>
                    <W.ZipWrap>
                        <W.Zipcode>{}</W.Zipcode>
                        <W.Btn>주소 검색</W.Btn>
                    </W.ZipWrap>
                    {/* {props.openModal
                        ?   <Modal open={props.openModal} onCancel={props.onClickOpenModal} onOk={props.onClickOpenModal}>
                                <DaumPostcodeEmbed 
                                    onClose={props.onClickOpenModal}
                                    style={{padding: "0px 15px"}}
                                    onComplete={props.addressInfo} />
                            </Modal>
                        : <></> 
                    } */}
                    <W.Address></W.Address>
                    <W.AddressDetail
                        // {...props.register("addressDetail")}
                        placeholder='상세 주소를 입력해주세요'
                        type='text' />
                </W.AddressWrap>
                <W.ContentsWrap>
                    <W.Title>이미지 등록</W.Title>
                    <W.ImgWrap>
                        <W.ImgBtn>
                            <W.ICamera src='/images/camera.png'/>
                            <W.Text> / 3</W.Text>

                            
                        </W.ImgBtn>
                    </W.ImgWrap>
                </W.ContentsWrap>
                </W.SecondWrap>
            </W.Wrapper>
        </>
    )
};

// <W.PriceWrap>
// <W.Sliders
//     min={1} 
//     max={100000} 
//     // onChange={props.onChangePrice} 
//     // value={props.price} 
//     tooltip={{open: false}}
    
//     />
// <W.Price>
//     {/* {priceTag(props.price)} */}
//     <div>원</div>
// </W.Price>
// </W.PriceWrap>