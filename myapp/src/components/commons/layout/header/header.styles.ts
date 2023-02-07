import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { Color } from "../../../../commons/utils/utils";



export const Wrapper = styled.div`
    width:100%;
    height: 10vh;
    background-color: ${Color.colors.blue};
    color: white;
    font-size: 17px;
    display:flex;
    justify-content:center;
    position:sticky;
`

export const TitleWrap = styled.div`
    display:flex;
    width:1200px;
    align-items:center;
    justify-content: flex-end;

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
    text-align:center;
    padding: 0 20px;

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
    flex-direction: row;
    align-items:center;
    justify-content:space-between;
    height: 100%;
`


// export const BasketWrap = styled.div`
//     /* width:47%; */
//     display:flex;
//     flex-direction:row;
//     justify-content:space-around;
// `