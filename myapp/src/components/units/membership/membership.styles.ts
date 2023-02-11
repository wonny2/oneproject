import { Color } from './../../../commons/utils/utils';
import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height: 100vh;
`

export const MembersWrap = styled.div`
    width: 800px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    border-radius: 8px;
    border: 1px solid ${Color.colors.blue};
    padding: 30px;
`

export const Box = styled.div`
    width: 100%;
    height: 60px;
    padding-left: 40px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    border: 1px solid ${Color.colors.blue};
    border-radius: 8px;
    cursor: pointer;
`

export const ColumnWrap = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    width: 100%;
    height: 300px;
`

export const RowWrap = styled.div`
    display:flex;
    flex-direction:row;
    align-items:flex-end;
`

export const Title = styled.span`
    font-size: 40px;
    font-weight: 600px;
`

export const Title2 = styled.span`
    font-size: 35px;
    padding: 80px;
`

export const SubTitle = styled.div`
    font-size: 20px;
`

export const SubTitle2 = styled.div`
    color: white;
`

export const Btn = styled.div`
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align:center;
    font-weight: 600;
    font-size: 30px;
    background-color: ${Color.colors.blue};
    color: white;
    border-radius: 8px;
    cursor: pointer;
`