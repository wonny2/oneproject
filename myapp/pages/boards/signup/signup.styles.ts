import styled from "@emotion/styled";
import { Color, signLog } from "../../../src/commons/utils/utils";


interface BackColorProps {
    isActive: boolean;
}


export const Wrapper = styled.div`
    width:100%;
    min-height: 90vh;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`

export const ContentsWrap = styled.div`
    width: 380px;
    height: 500px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-between;
`

export const RowWrap = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`

export const ColumnWrap = styled.div`
    display:flex;
    flex-direction:column;
    width: 100%;
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

export const Title = styled.div`
    font-size: ${signLog.titleFontSize};
    font-size: 700;
    margin-bottom:3px;
`

export const Inputs = styled.input`
    outline:none;
    width: 100%;
    height: ${signLog.inputHeight};
    padding-left:15px;
    border-radius: ${signLog.borderRadius};
    border: 1px solid ${Color.colors.blue};
`

export const SignUpBtn = styled.button`
    width: 100%;
    height: 3.42rem;
    text-align:center;
    font-size: 18px;
    border: 2px solid ${Color.colors.blue};
    border-radius:  ${signLog.borderRadius};
    cursor: pointer;
    /* background-color: white; */
    background-color: ${(props:BackColorProps) => (props.isActive ? Color.colors.blue : "white")};
    color: ${(props:BackColorProps) => (props.isActive ? "white" : "black")};
    
`

export const ErrorMsg= styled.div`
    font-size: 11px;
    color: red;
    /* padding: 0 10px; */
`