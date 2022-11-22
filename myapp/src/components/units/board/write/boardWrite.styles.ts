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
`

export const ContentWrap = styled.div`
    margin-bottom:70px;

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

export const Quill = styled(ReactQuill)`
    width:100%;
    height: 20rem;
    border:1px solid black;
`
export const Boxes = styled.div`
    width: 100px;
    height:100px;
`

