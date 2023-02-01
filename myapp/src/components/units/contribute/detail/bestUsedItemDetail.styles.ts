import styled from "@emotion/styled";
import { Color, titleMarginBottom } from "../../../../commons/utils/utils";
import {HeartTwoTone} from '@ant-design/icons';

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

export const PickedWrap = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    width:100%;
`

export const Text = styled.div`
    font-size: 12px;
`
export const HeartIcon = styled(HeartTwoTone)`
    font-size: 26px;
    padding-top: 10px;
    padding-right: 10px;
`

export const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: ${titleMarginBottom.bottom};
`

export const Contents = styled.div`
    font-size: 18px;
    width:100%;
    min-height: 50px;
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
    background-color: ${Color.colors.blue};
    color: white;
    margin-bottom: 70px;
    font-size: 16px;
    cursor: pointer;

    :hover {
        border: 3px solid ${Color.colors.blue};
        background-color: #fff;
        color: black;
    }
`