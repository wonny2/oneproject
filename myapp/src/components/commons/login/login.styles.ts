import styled from "@emotion/styled";
import { Color } from "../../../commons/utils/utils";


interface BackColorProps {
    isActive: boolean
}


export const Wrapper = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height: 90vh;

`

export const ContentsWrap = styled.div`
    width: 500px;
    height: 350px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
`

export const Belt = styled.div`
    width: 100%;
    height: 3.42rem;
    line-height: 3.42rem;
    color: white;
    font-size: 30px;
    background-color: ${Color.colors.blue};
    padding:0 20px;
`

export const RowWrap = styled.div`
    display:flex;
    flex-direction:row;
`

export const ColumnWrap = styled.div`
    display:flex;
    flex-direction:column;
`

export const Title = styled.div`
    font-size: 20px;
    font-weight:700;
`

export const InputWrap = styled.div`
    display:flex;
    flex-direction: column;
`

export const Inputs = styled.input`
    outline:none;
    width: 16rem;
    height:2rem;
    padding-left:15px;
    border-radius:10px;
    border: 1px solid ${Color.colors.blue};
`

export const LoginBtn = styled.button`
    width:70%;
    height: 2.47rem;
    line-height: 2.47rem;
    text-align:center;
    font-size: 18px;
    border: 2px solid ${Color.colors.blue};
    border-radius: 10px;
    background-color: ${(props:BackColorProps) => props.isActive ? Color.colors.blue : "white"};
    color: ${(props:BackColorProps) => props.isActive ? "white" : "black"};
    cursor: pointer;
`

