import { inputFontSize } from "./../../../../commons/utils/utils";
import styled from "@emotion/styled";
import {
  Color,
  secondWrapWidth,
  titleMarginBottom,
} from "../../../../commons/utils/utils";
import { HeartTwoTone } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SecondeWrap = styled.div`
  width: ${secondWrapWidth.width};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 0;
`;

export const BackImg = styled.div`
  width: 100%;
  height: 200px;
  line-height: 200px;
  text-align: center;
  position: relative;
  z-index: 1;

  > div {
    font-size: 57px;
    font-weight: 700;
    font-style: italic;
    letter-spacing: 3px;
    color: ${Color.colors.blue};
  }

  ::after {
    content: "";
    width: 100%;
    height: 100%;
    background: url("/images/help1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 36%;
    opacity: 0.5;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ImgWrap = styled.div`
  width: 400px;
  height: 400px;
  width: 50%;
  /* line-height:400px; // 이미지,dots빼고 arrow만 중앙정렬 됨 */

  // 지우지 말기! 참고하기!
  /* .slick-prev::before {
        opacity:1;
        color: rgba(30, 130, 76);
    } */

  .slick-next::before {
    /* opacity:1;
        color: ${Color.colors.blue};
        font-size:30px;
        margin-left:20px; */
  }

  .slick-dots {
    /* position:absolute; */
  }
`;

export const Images = styled.div`
  width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 370px;
  object-fit: contain;
  border-radius: 10px;
`;

export const RowWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 15px;
`;

export const WholeColumnWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  width: 50%;
`;

export const ContentsColumWrap = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${inputFontSize.common};
`;

export const PickedWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Text = styled.div`
  font-size: 12px;
`;
export const HeartIcon = styled(HeartTwoTone)`
  font-size: 26px;
  padding-top: 10px;
  padding-right: 10px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: ${titleMarginBottom.bottom};
`;

export const Contents = styled.div`
  font-size: 18px;
  width: 100%;
  height: 100%;
  min-height: 50px;
  line-height: 50px;
  margin-bottom: 20px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 0 20px;
`;

export const Button = styled.div`
  width: 9rem;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border-radius: 20px;
  background-color: ${Color.colors.blue};
  color: white;
  margin-bottom: 70px;
  font-size: 16px;
  cursor: pointer;

  :hover {
    border: 3px solid ${Color.colors.blue};
    background-color: #fff;
    color: black;
  }
`;
