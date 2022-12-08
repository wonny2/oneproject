import styled from "@emotion/styled";

export interface PaginationNum {
    backColor: boolean;
    title:String;
    keyword: String;
}

export const ColumnWrap = styled.div`
    border:1px solid black;
    margin-bottom: 14px;
    width:1200px;
`
export const RowWrap = styled.div`
    display:flex;
    flex-direction:row;
`

export const Title = styled.div`
    font-size: 20px;
    color: ${(props:PaginationNum) => props.title === props.keyword ? "green" : "black"};
    color : ${(props:PaginationNum) => 
        props.title.split(String(props.keyword)).filter((word) => word === props.keyword)[0] === props.keyword ? "black" : "green"};
`

export const Writer = styled.div`
    font-size:15px;
`
export const Date = styled.div`
    font-size: 12px;
    color: gray;
`

export const PageNum = styled.div`
    margin:0 10px;
    font-size: 13px;
    width:20px;
    text-align:center;
    line-height:20px;
    background-color: ${(props:PaginationNum) => props.backColor ?  "green" : "none"};
    color: ${(props:PaginationNum) => props.backColor ?  "white" : "black"};
    border-radius:15px;
    cursor: pointer;
`