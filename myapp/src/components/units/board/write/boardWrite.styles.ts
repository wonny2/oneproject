import { Color } from "../../../../commons/utils/utils";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import { Button } from 'antd';

const ReactQuill = dynamic( () => import('react-quill'), { ssr : false})

export const Wrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
`

export const SecondWrap = styled.div`
    width:1200px;
    padding-top: 40px;
    display:flex;
    flex-direction: column;
    align-items:center;
`

export const ContentWrap = styled.div`
    margin-bottom:70px;
    width:100%;

    > div {
        font-size: 25px;
        margin-bottom: 15px;
    }

    > input {
        width:100%;
        height: 3.15rem;
        font-size: 20px;
        outline-color: black;
        padding-left:20px;
    }
`

export const Title = styled.div`
    font-size:30px;
    font-weight:700;
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
`


export const Boxes = styled.div`
    width: 100px;
    height:100px;
`

export const RowWrap = styled.div`
    width: 10rem;
    display:flex;
    align-items:center;
    margin-bottom:100px;
    cursor: pointer;    
`

export const AddressWrap = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 150px;
    border:1px solid black;
`
export const ZipWrap = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 240px;
`

export const Zipcode = styled.div`
    width: 100px;
    height: 40px;
    line-height:40px;
    text-align:center;
    border: 1px solid black;
    font-size: 20px;
`

export const Btn = styled(Button)`
    width: 100px;
    height: 40px;
`

export const Address = styled.div`
    width: 40%;
    height: 40px;
    border: 1px solid black;
    line-height:40px;
    padding: 0 20px;
    font-size: 20px;
`

export const AddressDetail = styled.input`
    width: 40%;
    height: 40px;
    font-size: 20px;
    padding-left:20px;
    outline-color: black;
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
    border: 3px solid ${Color.colors.green};
    border-radius: 50px;
    line-height:55px;
    text-align:center;
    background-color: #fff;
    font-size: 20px;
    cursor: pointer;
    
    :hover {
        background-color: ${Color.colors.green};
        color: white;
    }
`

export const ErrorMsg = styled.div`
    color: red;
    font-size: 12px;
    margin-left: 10px;
`