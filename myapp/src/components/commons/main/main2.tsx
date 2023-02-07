import * as M from './main.styles'

export default function Main2Page() {

    return(
        <M.Main2Wrapper>
            <M.SecondWrap>
                <M.BigImg src='/images/main1.jpg'/>
                <M.ContentsWrap>

                    <div>
                    <M.ColorBox>
                        <div>빠른 후원</div>
                    </M.ColorBox>
                    <M.Remarks>
                        <div>
                            <span>관심이 모여서 누군가의 어려움을 </span>
                            <span> 도울 수 있는 곳</span>
                        </div>
                    </M.Remarks>
                    <M.SubTitle>
                        <div>
                            <span>거리에 상관없이, 시차에 어려움 없이 주변에 작은 도움이 필요한 이웃에게</span>
                            <span>소정의 후원을 할 수 있습니다.</span>
                        </div>
                    </M.SubTitle>
                    </div>

                    <M.InfoBox>
                        <M.InfoIcon src='/images/network.png'/>
                        <div>서비스 설명 {'>'}</div>
                    </M.InfoBox>

                </M.ContentsWrap>
            </M.SecondWrap>

            <M.SecondWrap>
                <M.ContentsWrap>
                    <div>
                        <M.ColorBox>
                            <div>원하는 후원</div>
                        </M.ColorBox>
                        <M.Remarks>
                            <span>부담없이 도움을 줄 수 있는 만큼만,</span>
                            <span>도움이 모여 함께하는 후원</span>
                        </M.Remarks>
                        <M.SubTitle>
                                <span>본인이 생각하기에 작은 금액일지라도</span>
                                <span>누군가에는 하루를 버틸 수 있는 힘이 됩니다.</span>
                        </M.SubTitle>
                    </div>
                    <M.InfoBox>
                        <M.InfoIcon src='/images/bribe.png'/>
                        <div> {'긴급 후원 목록 >'}</div>
                    </M.InfoBox>
                </M.ContentsWrap>
                <M.BigImg src='/images/main2.jpg'/>
            </M.SecondWrap>

            <M.SecondWrap>
                <M.BigImg src='/images/main3.jpg'/>

                <M.ContentsWrap>
                    <div>
                    <M.ColorBox>
                        <div>자유로운 등록</div>
                    </M.ColorBox>
                    <M.Remarks>
                        <div>
                            <span>긴급한 상황 속 도움 받을 곳을 </span>
                            <span>찾고 있다면 즉시 후원 등록 가능</span>
                        </div>
                    </M.Remarks>
                    <M.SubTitle>
                        <div>
                            <span>긴급 후원 등록한 다음 관리자 점검을 하게 됩니다.</span>
                            <span>최대 20시간 안에 등록 여부가 결정됩니다.</span>
                        </div>
                    </M.SubTitle>
                    </div>
                    <M.InfoBox>
                        <M.InfoIcon src='/images/hand.png'/>
                        <div>긴급 후원 등록 {'>'}</div>
                    </M.InfoBox>
                </M.ContentsWrap>
            </M.SecondWrap>
        </M.Main2Wrapper>
    )
}