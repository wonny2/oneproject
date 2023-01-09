import { Color } from "../../../../commons/utils/utils";
import styled from "@emotion/styled";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeartTwoTone } from '@ant-design/icons';
import 'antd/dist/reset.css';


export const Wrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
`

export const SecondWrapper = styled.div`
    width:1200px;
    display:flex;
    flex-direction: column;
    padding-top:50px;
`

export const ColumnWrap = styled.div`
    display:flex;
    flex-direction:column;
`

export const RowWrap = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    width:100%;
    margin-bottom: 100px;
`

export const ImgWrap = styled.div`
    width:400px;
    height:400px;
    /* display:flex;
    flex-direction:column;
    align-items: flex-end; */


    /* line-height:400px; // 이미지,dots빼고 arrow만 중앙정렬 됨 */


    // 지우지 말기! 참고하기!
     /* .slick-prev::before {
        opacity:1;
        color: rgba(30, 130, 76);
    } */

     .slick-next::before {
        opacity:1;
        color: rgba(30, 130, 76, 0.8);
        font-size:30px;
        margin-left:20px;
    }

    .slick-dots {
        /* position:absolute; */
    }
`

export const HeartIcon = styled(HeartTwoTone)`
    font-size: 35px;
`

export const BasketBtn = styled.div`
    width: 8rem;
    height: 3rem;
    line-height:3rem;
    text-align:center;
    color:white;
    background-color: #6CAF66;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
`

export const Img = styled.img`
    width:100%;
    height:370px;
    object-fit: contain;
    border-radius: 10px;
`

export const Images = styled.div`
    width:100%;
    height:100%;
`

export const ContentsWrap = styled.div`
    width: 40rem;
    display:flex;
    flex-direction:column;
`
export const Title = styled.div`
    width:200px;
    height:50px;
    line-height:50px;
    font-size: 30px;
    font-weight: 700;
`

export const Contents = styled.div`
    font-size: 18px;
    width:100%;
    height: 50px;
    line-height:50px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    margin-bottom: 20px;
    padding-left: 40px;
    border: 1px solid gray;
    border-radius: 10px;
`

export const ButtonWrap = styled.div`
    width: 100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    margin-bottom: 70px;

`

export const Button = styled.div`
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 40px;
    line-height:40px;
    text-align:center;
    background-color: ${Color.colors.green};
    color: white;
    font-size: 16px;
    margin: 0 15px;
    cursor: pointer;
    
    :hover {
        border: 3px solid ${Color.colors.green};
        background-color: #fff;
        color: black;
    }
`