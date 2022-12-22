import { IBoardDetailUIProps } from "./boardDetail.types"
import * as D from './boardDetail.styles'
import {v4 as uuidv4} from 'uuid'
import CommentContainer from "../../boardComment/commentWrite/commentWrite.container"
import CommentListContainer  from "../../boardComment/commentList/commentList.container"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'antd';
import 'antd/dist/reset.css';

export default function BoardDetailPresenter(props: IBoardDetailUIProps) {
    const settings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        arrows:true,
        dots: true,
        centerPadding: '0px', // 0px로 하면 슬라이드 끝쪽 이미지가 안 짤림
    };


    return(
        <D.Wrapper>
            <D.SecondWrapper>
                <D.RowWrap>
                    <D.ImgWrap>
                        <Slider {...settings}>
                            {props.data?.fetchBoard.images?.filter(item => item).map((el) => (
                                    <D.Images key={uuidv4()}>
                                        {!el || el.includes('https://storage.googleapis.com/')
                                            ? <D.Img src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" />
                                            : <D.Img src={`https://storage.googleapis.com/${el}`} />
                                        }      
                                    </D.Images>
                            ))}
                        </Slider>
                    </D.ImgWrap>
                    <D.ContentsWrap>
                        <D.ColumnWrap>
                            <D.Title>작성자</D.Title>
                            <D.Contents>{props.data?.fetchBoard.writer}</D.Contents>
                        </D.ColumnWrap>

                        <D.ColumnWrap>
                            <D.Title>제목 | TITLE</D.Title>
                            <D.Contents>{props.data?.fetchBoard.title}</D.Contents>
                        </D.ColumnWrap>

                        <D.ColumnWrap>
                            <D.Title>내용</D.Title>
                            <D.Contents 
                                dangerouslySetInnerHTML={{__html: String(props.data?.fetchBoard.contents) }} />
                        </D.ColumnWrap>
                        <div style={{display: "flex", justifyContent:"end"}}>

                            {/* <D.BasketBtn>장바구니 담기</D.BasketBtn> */}
                            <Button onClick={props.success}>장바구니 담기</Button>
                        </div>
                    </D.ContentsWrap>
                </D.RowWrap>
                <D.ButtonWrap>
                    <D.Button onClick={props.onClickUpdate}>수 정 하 기</D.Button>
                    <D.Button onClick={props.onClickMoveToList}>목 록 으 로</D.Button>
                    <D.Button onClick={props.onClickDelete}>삭 제 하 기</D.Button>
                </D.ButtonWrap>
                {/* ======================================================================== */}
                <CommentContainer isBoard={true}/>
                <CommentListContainer isBoard={true}/>
            </D.SecondWrapper>
        </D.Wrapper>
    )
}