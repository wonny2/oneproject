import { inputFontSize } from './../../../../commons/utils/utils';
import styled from "@emotion/styled";
import { Color, inputPadding } from "../../../../commons/utils/utils";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import { Slider, Button, Modal } from 'antd';
import DaumPostcodeEmbed from 'react-daum-postcode';

const ReactQuill = dynamic( () => import('react-quill'), { ssr : false})

interface ValidProps {
    isActive: boolean;
}

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
    padding: 90px 0;
`

export const Icon = styled.div`
    width: 900px;

    > img {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
`

export const BackImg = styled.div`
    width:100%;
    height: 200px;
    line-height: 200px;
    text-align:center;
    position: relative;
	z-index: 1;

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

export const Error = styled.div`
    font-size: 10px;
    color:red;
`

export const ContentsWrap = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    width: 70%;
    margin-bottom: 50px;
`

export const Title = styled.div`
    font-size: 20px;
    font-weight: 800;
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
    flex-direction:column;
    justify-content: space-between;
    width: 70%;
    margin-bottom: 50px;
`

export const PriceRowWrap =styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
    width: 100%;
`

export const Sliders = styled(Slider)`
    width: 60%;
    /* background-color: red; */
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
export const InfoMsg = styled.div`
    font-size: 12px;
    color: gray;
    padding-left: 10px;
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

export const DaumModal = styled(Modal)``

export const DaumAddess = styled(DaumPostcodeEmbed)``

export const Zipcode = styled.div`
    width: 100px;
    height: 40px;
    line-height:40px;
    text-align:center;
    border: 1px solid black;
    font-size: ${inputFontSize.common};
`

export const AddressBtn = styled(Button)`
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
    justify-content:space-between;
    width: 55%;
    margin-bottom: 70px;
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

export const EnrollBtn = styled.button`
    width: 70%;
    height: 50px;
    font-size: 23px;
    font-weight: 700;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    background-color: ${Color.colors.blue};
`

// background-color: ${(props:ValidProps) => props.isActive ? "${Color.colors.blue}" : "none"};
