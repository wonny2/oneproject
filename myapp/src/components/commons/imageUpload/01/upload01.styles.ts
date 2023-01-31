import styled from "@emotion/styled";
import { Color } from "../../../../commons/utils/utils";

export const Imgs = styled.img`
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 8px;
`

export const UploadBtn = styled.div`
    font-size: 20px;
    width:100px;
    height: 100px;
    border: 1px solid ${Color.colors.blue};
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 8px;
    cursor: pointer;
`

export const RowWrap = styled.div`
    border: 1px solid black;
`


export const UploadHidden = styled.input`
    display:none;
`