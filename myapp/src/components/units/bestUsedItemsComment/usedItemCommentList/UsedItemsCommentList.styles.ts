import { Color } from "../../../../commons/utils/utils";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:20px;
    padding: 0 40px;
`

export const ContentsWrap = styled.div`
    display:flex;
    flex-direction:column;
`
export const UserWrap = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-between;
    width:90%;
`

export const RowWrap = styled.div`
    display:flex;
    flex-direction:row;
`


export const ColumnWrap = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:20px;
`

export const CommentOpenWrap = styled.div`
    width: 90%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-between;
    /* border: 1px solid black; */
`

export const Date = styled.div`
    font-size: 12px;
    color: gray;
`

export const Title = styled.div`
    font-size: 26px;
    font-weight: 700;
`

export const Name = styled.div`
    font-size: 16px;
    margin-left:10px;
`

export const Contents = styled.div`
    width: 100%;
    height: 130px;
    padding: 20px 38px;
    font-size: 19px;
    
`

export const CommentOpen = styled.div`
    width: 80px;
    height: 40px;
    line-height:40px;
    text-align:center;
    background-color: ${Color.colors.green};
    border-radius: 10px;
    color: white;
    cursor: pointer;

`

export const AnswerWrap = styled.div`
    padding-left: 70px;
    display:flex;
    flex-direction:column;
`

export const AnswerInput = styled.input`
    width: 38rem;
    height: 35px;
    border-radius: 20px;
    border:1px solid #c5d5c5;
    outline: 1px solid #c5d5c5;
    padding-left: 20px;
    font-size: 14px;
`

export const AnswerBtn = styled.div`
    width:80px;
    height: 30px;
    line-height:30px;
    text-align:center;
    background-color: ${Color.colors.green};
    border-radius: 10px;
    color: white;
    margin-left: 40px;
    cursor: pointer;
`

export const AnswerContents = styled.div`
    width: 60%;
    height: 100px;
    padding-left:37px;
    margin:15px 0px;
`

export const Line = styled.div`
    width: 90%;
    height: 2px;
    border-top: 1px solid #C5D5C5;
    margin: 20px 0px;
`