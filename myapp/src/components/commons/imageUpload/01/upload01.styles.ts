import styled from "@emotion/styled";
import { Color } from "../../../../commons/utils/utils";

export const Imgs = styled.img`
    width:10.75rem;
    height:10.75rem;
    cursor: pointer;
    border-radius:15px;
`

export const UploadBtn = styled.div`
    font-size: 20px;
    width: 150px;
    height: 150px;
    border: 3px solid ${Color.colors.blue};
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:15px;
    cursor: pointer;
`

export const RowWrap = styled.div`

`


export const UploadHidden = styled.input`
    display:none;
`