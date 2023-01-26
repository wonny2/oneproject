import { Color } from "../../../../commons/utils/utils";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width:1200px;
    display:flex;
    flex-direction:column;
    padding: 20px 40px;
`

export const RowWrap = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    width: 100%;
    justify-content:space-between;
    margin-bottom:30px;
`

export const TopWrap = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width: 170px;
`

export const Text = styled.div`
    font-size: 36px;
    font-weight: 700;
`

export const UpdateOpenBtn = styled.div`
    cursor: pointer;
    width: 90px;
    height: 35px;
    background-color: ${Color.colors.blue};
    color: white;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    text-align:center;
    line-height:35px;
`

export const UpdateCommentWrap = styled.div`
    display:flex;
    flex-direction:column;
    width: 50%;
    height:230px;
    justify-content:space-around;
`

export const ContentsWrap = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height: 70px;
`

export const Text2 = styled.div`
    font-size: 20px;
    font-weight: 700;
`

export const Inputs = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 7px;
    outline:none;
    border:1px solid blue;
    padding-left: 20px;
`

export const UpdateBtn = styled.div`
    cursor: pointer;
    width: 85px;
    height: 35px;
    line-height:35px;
    background-color: ${Color.colors.blue};
    color: white;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    text-align:center;
`

export const SecondWrap = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
    width: 100%;
`

export const Writer = styled.div`
    font-size: 23px;
    font-weight: 600;
    margin:20px 0;
`
export const Date = styled.div`
    color: gray;
    font-size: 15px;
`

export const Contents = styled.div`
    width:100%;
    height: 15rem;
    border:none;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    padding: 20px;
    font-size: 18px;
`

