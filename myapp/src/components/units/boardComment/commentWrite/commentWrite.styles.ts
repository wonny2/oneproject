import { Color, secondWrapWidth } from "../../../../commons/utils/utils";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: ${secondWrapWidth.width};
    display:flex;
    flex-direction:column;
    padding: 90px 0;
`

export const Title = styled.div`
    font-size: 32px;
    font-weight: 700;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid ${Color.colors.blue};
    color: ${Color.colors.blue};
`

export const InputWraps = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width: 23rem;
`

export const ColumnWrap = styled.div`
    display:flex;
    flex-direction:column;
    padding: 30px;
`



export const Text = styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 7px;
`

export const Input = styled.input`
    width: 10rem;
    height: 2.2rem;
    font-size: 20px;
    border: 1px solid #C5D5C5;
    border-radius:10px;
    outline: none;
    font-size: 14px;
    padding-left: 15px;
`

export const Contents = styled.input`
    width: 100%;
    height: 20px;
    font-size: 17px;
    border: none;
    border-bottom: 2px solid ${Color.colors.blue};
    outline: none;
    padding: 20px;
    font-family: 'Humanbumsuk';
    margin-bottom:20px;
`

export const ButtonWrap = styled.div`
    width:100%;
    display:flex;
    justify-content: flex-end;
`

export const SubmitBtn = styled.button`
    width:100px;
    height: 40px;
    line-height:40px;
    font-size: 15px;
    text-align:center;
    background-color: ${Color.colors.blue};
    border-radius: 10px;
    border: none;
    color: white;
    cursor: pointer;
    `