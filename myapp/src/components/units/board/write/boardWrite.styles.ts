import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';

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
    border: 3px solid black;
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
        
    }
`

export const Title = styled.div`
    font-size:30px;
    font-weight:700;
`

export const Quill = styled(ReactQuill)`
    width:100%;
    height: 20rem;
    border:1px solid black;
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

export const SubmitBtn = styled.button`
    width: 160px;
    height: 55px;
    border: 3px solid green;
    border-radius: 50px;
    line-height:55px;
    text-align:center;
    margin-bottom:100px;
    background-color: #fff;
    
    :hover {
        background-color: green;
        color: white;
    }
`

export const RowWrap = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`

export const ErrorMsg = styled.div`
    color: red;
    font-size:12px;
    margin-left: 10px;
`