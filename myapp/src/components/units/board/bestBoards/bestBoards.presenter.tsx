import * as L from './bestBoards.styles'
import {IBoardListPropsUI} from './bestBoards.types'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function MainListPresenter(props: IBoardListPropsUI) {

    const setting = {
        infinite: true,
        speed: 200,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
    };


    return(
        <L.Wrapper>
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
                        <div onClick={props.MoveToList}>게시글 리스트</div>
                        <div onClick={props.MoveToWrite}>글쓰기</div>
                    </L.TextWrap>
                </L.MenuBar>

            </L.ContentsWrap>
        </L.Wrapper>
    )
}0