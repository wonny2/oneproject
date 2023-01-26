import styled from "@emotion/styled";
import { Color } from "../../../src/commons/utils/utils";


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
    width: 500px;
    height: 400px;
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
    font-size: 20px;
    font-size: 700;
    margin-bottom:3px;
`

export const Inputs = styled.input`
    outline:none;
    width: 16rem;
    height:2rem;
    padding-left:15px;
    border-radius:10px;
    border: 1px solid ${Color.colors.blue};
`

export const SignUpBtn = styled.button`
    width:70%;
    height: 2.47rem;
    line-height: 2.47rem;
    text-align:center;
    font-size: 18px;
    border: 2px solid ${Color.colors.blue};
    border-radius: 10px;
    cursor: pointer;
    /* background-color: white; */
    background-color: ${(props:BackColorProps) => (props.isActive ? "rgba(30, 130, 76)" : "white")};
    color: ${(props:BackColorProps) => (props.isActive ? "white" : "black")};
    
`

export const ErrorMsg= styled.div`
    font-size: 11px;
    color: red;
    /* padding: 0 10px; */
`