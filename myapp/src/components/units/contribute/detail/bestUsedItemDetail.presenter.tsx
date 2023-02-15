import UsedItemsCommentListContainer from "../../bestUsedItemsComment/usedItemCommentList/usedItemsCommentList.container";
import CommentContainer from "../../boardComment/commentWrite/commentWrite.container";
import * as D from "./bestUsedItemDetail.styles";
import { IBestUsedItemDetailPropsUI } from "./bestUsedItemDetail.types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";
import ButtonComPonent from "../../../commons/button";

export default function BestItemDetailPresenter(
  props: IBestUsedItemDetailPropsUI
) {
  const settings = {
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows: true,
    dots: true,
    centerPadding: "0px", // 0px로 하면 슬라이드 끝쪽 이미지가 안 짤림
  };

  return (
    <D.Wrapper>
      <D.BackImg>
        <div>긴급 후원 내용</div>
      </D.BackImg>

      <D.SecondeWrap>
        <D.ImgWrap>
          <Slider {...settings}>
            {props.data?.fetchUseditem.images
              ?.filter((item: any) => item)
              .map((el: any) => (
                <D.Images key={uuidv4()}>
                  {!el || el.includes("https://storage.googleapis.com/") ? (
                    <D.Img src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" />
                  ) : (
                    <D.Img src={`https://storage.googleapis.com/${el}`} />
                  )}
                </D.Images>
              ))}
          </Slider>
        </D.ImgWrap>

        <D.WholeColumnWrap>
          <D.ContentsColumWrap>
            <D.PickedWrap>
              <D.Title>이 름</D.Title>
              <D.HeartIcon
                onClick={props.onClickPicked}
                // #eb2f96
                twoToneColor={props.pickedColor ? "blue" : "lightgray"}
              />
            </D.PickedWrap>
            <D.Contents>{props.data?.fetchUseditem.name}</D.Contents>
          </D.ContentsColumWrap>

          <D.ContentsColumWrap>
            <D.Title>제 목</D.Title>
            <D.Contents>{props.data?.fetchUseditem.remarks}</D.Contents>
          </D.ContentsColumWrap>

          <D.ContentsColumWrap>
            <D.Title>내 용</D.Title>
            <D.Contents
              dangerouslySetInnerHTML={{
                __html: String(props.data?.fetchUseditem.contents),
              }}
            />
          </D.ContentsColumWrap>
        </D.WholeColumnWrap>
      </D.SecondeWrap>

      <ButtonComPonent onClick={props.MoveToList}>목 록 으 로</ButtonComPonent>
      <CommentContainer isBoard={false} />
      <UsedItemsCommentListContainer />
    </D.Wrapper>
  );
}
