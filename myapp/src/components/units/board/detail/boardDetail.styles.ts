import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
`

export const SecondWrapper = styled.div`
    width:1200px;
    border: 2px solid black;
    display:flex;
    flex-direction: column;
`

export const ColumnWrap = styled.div`
    display:flex;
    flex-direction:column;
`

export const RowWrap = styled.div`
    display:flex;
    flex-direction:row;
`

export const Text = styled.div`
    font-size: 20px;
    font-weight: 700;
`

export const Button = styled.button`
    width: 160px;
    height: 55px;
    border: none;
    border-radius: 50px;
    line-height:55px;
    text-align:center;
    margin-bottom:100px;
    background-color: green;
    color: white;
    font-size:18px;
    
    :hover {
        border: 3px solid green;
        background-color: #fff;
        color: black;
    }
`