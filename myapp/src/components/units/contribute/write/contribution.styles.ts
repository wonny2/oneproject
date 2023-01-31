import { inputFontSize } from './../../../../commons/utils/utils';
import styled from "@emotion/styled";
import { Color, inputPadding } from "../../../../commons/utils/utils";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import { Slider, Button } from 'antd';

const ReactQuill = dynamic( () => import('react-quill'), { ssr : false})

export const Wrapper = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items:center;
`

export const SecondWrap = styled.div`
    width: 900px;
    display:flex;
    flex-direction: column;
    align-items:center;
`

export const BackImg = styled.div`
    width:100%;
    height: 200px;
    line-height: 200px;
    text-align:center;
    position: relative;
	z-index: 1;
    margin-bottom: 100px;    

    > div {
        font-size: 57px;
        font-weight: 700;
        font-style: italic;
        letter-spacing: 3px;
        color: ${Color.colors.blue};
    };
	
	::after {
		content: "";
		width:100%;
		height:100%;
		background: url('/images/help1.jpg');
		background-size: cover;
		background-repeat: no-repeat;
        background-position: 0 37%;
		opacity: 0.5;
		z-index: -1;
		position: absolute;
		top: 0;
  		left: 0;
	};
`

export const RowWrap = styled.div``


export const ContentsWrap = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    width: 70%;
    margin-bottom: 50px;
`

export const Title = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-bottom:10px;
`

export const Input = styled.input`
    outline: none;
    height: 40px;
    border: none;
    border-bottom:  1px solid black;
    padding-left: ${inputPadding.left};
`

export const Contents = styled(ReactQuill)`
    width: 100%;
    height: 15rem;
    padding-bottom: 45px;
`

export const PriceWrap = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
`

export const Sliders = styled(Slider)`
    width: 60%;
`

export const Price = styled.div`
    display:flex;
    flex-direction: row;
    align-items: flex-end;
    font-size: 20px;

    > div {
        font-size: 14px;
    };
`

export const AddressWrap = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
    height: 190px;
    margin-bottom: 50px;
`
export const ZipWrap = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 210px;
`

export const Zipcode = styled.div`
    width: 100px;
    height: 40px;
    line-height:40px;
    text-align:center;
    border: 1px solid black;
    font-size: ${inputFontSize.common};
`

export const Btn = styled(Button)`
    width: 100px;
    height: 40px;
`

export const Address = styled.div`
    width: 100%;
    height: 40px;
    line-height:40px;
    padding: 0 20px;
    font-size: ${inputFontSize.common};
    border: none;
    border-bottom: 1px solid black;
`

export const AddressDetail = styled.input`
    width: 100%;
    height: 40px;
    font-size: ${inputFontSize.common};
    padding-left:20px;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
`

export const ImgWrap = styled.div`
    display:flex;
    flex-direction:row;
    width: 65%;
    background-color: lightblue;
    /* background-color: red; */
`

export const ImgBtn = styled.div`
    width:100px;
    height: 100px;
    border: 1px solid ${Color.colors.blue};
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius: 8px;
    cursor: pointer;
`

export const ICamera = styled.img`
    width: 30px;
    height: 30px;
`

export const Text = styled.span`
    font-size: 8px;

`