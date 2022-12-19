import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
    width:100%;
    height: 10vh;
    background-color: rgba(30, 130, 76);
    font-size: 17px;
    display:flex;
    justify-content:center;
`

export const TitleWrap = styled.div`
    display:flex;
    width:1200px;
    align-items:center;
    justify-content:space-between;

    @media ${breakPoints.mobile} {
        justify-content: space-around;
    }

    @media ${breakPoints.tablet} {
        justify-content: space-around;
    }

    @media ${breakPoints.desktop} {
        justify-content: space-around;
    }
`

export const Title = styled.div`
    color: white;
    cursor: pointer;

    @media ${breakPoints.mobile} {
        font-size: 15px;
    }

    @media ${breakPoints.tablet} {
        font-size: 15px;
    }
`

export const LogoIcon = styled.img`
    width: 45px;
    height: 45px;
    cursor: pointer;
`

export const LogPart = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:120px;
`