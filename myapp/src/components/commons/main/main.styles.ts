import styled from "@emotion/styled";
import { Color } from "../../../commons/utils/utils";

export const Wrapper = styled.div`
    width: 56.25rem;
    /* background-color: lightblue; */
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 30px 60px;
    /* border: 1px solid black; */
    margin-bottom: 100px;

`

export const IconWrap = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;
    height: 80px;
    cursor: pointer;
`

export const Icon = styled.img`
    width: 50px;
    height: 50px;
    transition: all 0.2s ease-out;

    :hover{
        transform: translateY(-20%)
    };
`

export const Title = styled.div`
    font-size: 14px;
`

export const Main2Wrapper = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    padding: 120px 60px;

`

export const SecondWrap = styled.div`
    width: 100%;
    padding: 100px 20px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`

export const BigImg = styled.img`
    width: 500px;
    height: 500px;
    border-radius: 20px;
    object-fit: cover;
`

export const ContentsWrap = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: flex-end;
    width: 55%;

    /* border: 1px solid black; */
`

export const ColorBox = styled.div`
    border-radius: 10px;
    width: 120px;
    height: 41px;
    line-height: 43px;
    text-align:center;
    background-color: #FFD8D8;

    > div {
        color: #494949;
    }

`

export const Remarks = styled.div`
    font-size: 45px;
    font-weight: 900;
    padding: 20px 0;
    width: 100%;
    display:flex;
    flex-direction: column;
    /* align-items: flex-end; */

    > span {
        align-items: flex-end;
        color: ${Color.colors.blue};
    }

    > div {
        display:flex;
        flex-direction: column;
        align-items: flex-end;
        color: ${Color.colors.blue};
    }
    
`

export const SubTitle = styled.div`
    font-size: 15px;
    padding: 20px 0;
    /* display:flex;
    flex-direction: column; */

    > span {
        display:flex;
        flex-direction: column;
        align-items: flex-start;
    }

    > div {
        display:flex;
        flex-direction: column;
        align-items: flex-end;
    }
`

export const InfoBox = styled.div`
    display:flex;
    align-items:center;
    width: 100%;
    padding: 20px 40px;
    background-color: #FEFBFB;
    border-radius: 15px;
    cursor: pointer;

    > div {
        font-size: 18px;
        padding: 0 20px;
    }
`

export const InfoIcon = styled.img`
    width: 80px;
    height: 80px;
`

export const InfoText = styled.div`
    font-size: 17px;
`