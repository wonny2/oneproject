import * as L from './mainList.styles'
import Slick from '../../../commons/slick'
import {IBoardListPropsUI} from './mainList.types'


export default function BoardListPresenter(props: IBoardListPropsUI) {
    return(
        <L.Wrapper>
            <Slick />
            <L.ContentsWrap>
                <L.CardWrap>
                    {props.data?.fetchBoardsOfTheBest.map((item:any) => (
                        <L.Card>
                            <div> title <br /> {item.title}</div>
                            <div> contents <br /> {item.contents}</div>
                            <div> 좋아요 수 <br /> {item.likeCount}</div>
                        </L.Card>
                    ))}
                </L.CardWrap>
                
                <L.MenuBar>
                    <L.TextWrap>
                        <div onClick={props.MoveToWrite}>글쓰기</div>
                    </L.TextWrap>
                </L.MenuBar>

            </L.ContentsWrap>
        </L.Wrapper>
    )
}0