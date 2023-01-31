import styled from "@emotion/styled";
import { Color } from "../../../../commons/utils/utils";


export const Imgs = styled.img`
    width: 100px;
    height: 100px;
    cursor: pointer;
    border-radius: 8px;
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


export const UploadBtn = styled.div`
    font-size: 20px;
    width:100px;
    height: 100px;
    border: 1px solid black;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 8px;
    cursor: pointer;
`

export const ICamera = styled.img`
    width: 30px;
    height: 30px;
`

export const UploadHidden = styled.input`
    display:none;
`