import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
`

export const SecondeWrap = styled.div`
    width:1000px;
    display:flex;
    flex-direction:column;
`

export const RowWrap = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    margin-top:15px;
`

export const ColumnWrap = styled.div`
    display:flex;
    flex-direction:column;
`

export const Title = styled.div`
    width:200px;
    height:50px;
    line-height:50px;
    font-size: 30px;
    font-weight: 700;
`

export const Contents = styled.div`
    font-size: 18px;
    width:100%;
    height: 50px;
    line-height:50px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    margin-bottom: 20px;
    padding-left: 40px;
    border: 1px solid gray;
    border-radius: 10px;
`

export const Button = styled.div`
    width: 9rem;
    height: 35px;
    line-height:35px;
    text-align:center;
    border-radius: 20px;
    background-color: rgba(30, 130, 76);
    color: white;
    margin-bottom: 70px;
    font-size: 16px;
    cursor: pointer;

    :hover {
        border: 3px solid rgba(30, 130, 76);
        background-color: #fff;
        color: black;
    }
`