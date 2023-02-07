import styled from "@emotion/styled";
import { titleMarginBottom, Color, signLog } from "../../../commons/utils/utils";


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
    width: 380px;
    height: 600px;
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


export const Kakao = styled.div`
    width: 100%;
    height: 3.62rem;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #f9e000;
    cursor: pointer;
`

export const Line = styled.div`
    width: 100%;
    height: 1px;
    border-bottom: 1px solid ${Color.colors.blue};
    text-align: center;
    margin: 45px 0;

    ::after {
        content: "또는 이메일 로그인";
        position: relative;
        top: -0.5rem;
        padding: 0 1.6rem;
        background-color: #fff;
    }
`
export const KakaoIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
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
    font-size: ${signLog.titleFontSize};
    font-weight:700;
    margin-bottom: ${titleMarginBottom.bottom};
`

export const InputWrap = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
`

export const Inputs = styled.input`
    outline:none;
    width: 100%;
    height: ${signLog.inputHeight};
    padding-left:15px;
    border-radius: ${signLog.borderRadius};
    border: 1px solid ${Color.colors.blue};
`

export const LoginBtn = styled.button`
    width:100%;
    height: 3.42rem;
    text-align:center;
    font-size: 18px;
    border: 2px solid ${Color.colors.blue};
    border-radius: 5px;
    background-color: ${(props:BackColorProps) => props.isActive ? Color.colors.blue : "white"};
    color: ${(props:BackColorProps) => props.isActive ? "white" : "black"};
    cursor: pointer;
`

export const SignUp = styled.div`
    font-size: 13px;
    color:${Color.colors.blue};
    border-bottom: 1px solid ${Color.colors.blue};
    padding-bottom: 5px;
    cursor: pointer;

    :hover {
        border-bottom: 1.5px solid ${Color.colors.blue};
    }
`