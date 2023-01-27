import { Color } from "../../../../commons/utils/utils";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import { Button } from 'antd';
import { Col, InputNumber, Row, Slider, Space } from 'antd';


const ReactQuill = dynamic( () => import('react-quill'), { ssr : false})

export const Wrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:center;

`

export const SecondWrap = styled.div`
    width: 700px;
    /* padding-top: 40px; */
    display:flex;
    flex-direction: column;
    align-items:center;
`

export const ContentWrap = styled.div`
    margin-bottom:70px;
    width:100%;

    > input {
        width:100%;
        height: 3.15rem;
        font-size: 13px;
        outline-color: black;
        padding-left:20px;
        outline:none;
    }
`

export const RowWrap = styled.div`
    width: 11rem;
    display:flex;
    align-items:center;
    margin-bottom:100px;
    font-size: 20px;
    margin-bottom: 15px;
`

export const Title = styled.div`
    padding-left: 30px;
    font-size:30px;
    font-weight:700;
    height: 60px;
    line-height: 60px;
    background-color: ${Color.colors.blue};
    color: white;
    letter-spacing: 5px;
    margin-bottom: 70px;
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
    }
`

export const Quill = styled(ReactQuill)`
    width:100%;
    height: 20rem;
`

export const ImgRowWrap = styled.div`
    width:44rem;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    border: 1px solid black;
    margin-bottom:120px;
`


export const Boxes = styled.div`
    width: 100px;
    height:100px;
`

export const AddressWrap = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 190px;
    margin-bottom:70px;
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
    font-size: 13zpx;
`

export const Btn = styled(Button)`
    width: 100px;
    height: 40px;
`

export const Address = styled.div`
    width: 100%;
    height: 40px;
    border: 1px solid black;
    line-height:40px;
    padding: 0 20px;
    font-size: 13px;
`

export const AddressDetail = styled.input`
    width: 100%;
    height: 40px;
    font-size: 13px;
    padding-left:20px;
    outline-color: black;
    outline: none;
`

export const ButtonWrap = styled.div`
    width: 18rem;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-bottom:100px;
    cursor: pointer; 
`

export const Buttons = styled.button`
    width: 8.125rem;
    height: 55px;
    border: 3px solid ${Color.colors.blue};
    border-radius: 50px;
    line-height:55px;
    text-align: center;
    background-color: #fff;
    font-size: 15px;
    cursor: pointer;
    
    :hover {
        background-color: ${Color.colors.blue};
        color: white;
    }
`

export const ErrorMsg = styled.div`
    color: red;
    font-size: 12px;
    margin-left: 10px;
`