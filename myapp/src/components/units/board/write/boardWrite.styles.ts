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

export const ListBtn = styled.div`
    width: 160px;
    height: 55px;
    border: 3px solid rgba(30, 130, 76);
    border-radius: 50px;
    line-height:55px;
    text-align:center;
    background-color: #fff;
    font-size: 20px;
    
    :hover {
        background-color: rgba(30, 130, 76);
        color: white;
    }
`

export const SubmitBtn = styled.button`
    width: 160px;
    height: 55px;
    border: 3px solid  rgba(30, 130, 76);
    border-radius: 50px;
    line-height:55px;
    text-align:center;
    background-color: #fff;
    font-size: 20px;
    cursor: pointer;
    
    :hover {
        background-color: rgba(30, 130, 76);
        color: white;
    }
`

export const RowWrap = styled.div`
    width: 350px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-bottom:100px;
    cursor: pointer;    
`

export const ErrorMsg = styled.div`
    color: red;
    font-size:12px;
    margin-left: 10px;
`