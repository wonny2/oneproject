import { Color } from "../../../../commons/utils/utils";
import { breakPoints } from "../../../../commons/styles/media";
import styled from "@emotion/styled";


export const Wrapper = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    
`

export const ContentsWrap = styled.div`
    width: 80rem;
    display:flex;
    flex-direction:row;
    justify-content:space-between;

    /* @media ${breakPoints.mobile} {
        width: 100%;
        font-size: 2.5rem;
    }

    @media ${breakPoints.tablet} {
        width: 100%;
    }

    @media ${breakPoints.desktop} {
        width: 100%;
    } */

`


// export const CardWrap = styled.div`
//     width: 100%;
//     display:flex;
//     flex-direction:row;
//     justify-content:space-around;
//     margin-bottom: 30px;
//     padding: 30px;

//     @media ${breakPoints.mobile} {
//         display:grid;
//         grid-template-columns: repeat(2, 10rem);
//         grid-row-gap: 20px;
//         place-items: center;
//     }

//     @media ${breakPoints.tablet} {
//         display:grid;
//         grid-template-columns: repeat(2, 10rem);
//         grid-row-gap: 20px;
//         width: 37.5rem;
//         place-items: center;
//     }
// `

export const SubTitle = styled.div`
    font-size: 30px;
    font-weight: 700;
    display:flex;
    flex-direction: column;
    cursor: pointer;
    
    > span {
        margin-bottom: 20px;
    }
`

export const Button = styled.div`
    background-color: ${Color.colors.blue};
    width: 130px;
    height: 50px;
    line-height: 50px;
    padding-left: 15px;
    color: white;
    font-size: 14px;
`



export const Card = styled.div`
    width: 13.5rem;
    height: 16.5rem;
    box-shadow: 1px 1px 3px gray;
    display:flex;
    flex-direction: column;
    align-items:center;
    text-align:center;
    border-radius: 7px;
    transition: all 0.2s ease-out;
    padding: 0 20px;
    cursor: pointer;

    :hover{
        transform: translateY(-20px);
    }

    @media ${breakPoints.mobile} {
        width: 11.23rem;
        height: 19rem;
        font-size: 2.5rem;
    }
`

export const Image = styled.img`
    width: 4.7rem;
    height: 4.7rem;
    object-fit: cover;
    margin-bottom: 15px;
    border-radius: 50%;
    position: relative;
    top: -14px;
    
`

// export const Name = styled.div`
//     font-size:23px;
//     font-weight: 700;
//     width: 100%;
//     height: 30px;
//     padding: 0 20px;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     background-color: red;
// `


export const CardContentsWrap = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height: 130px;
`

export const Contents = styled.div`
    font-size:15px;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 80px;
`

export const Time = styled.div`
    width:100%;
    font-size: 12px;
    color: gray;
`

export const MenuBar = styled.div`
    width:100%;
    height: 2.6rem;
    background-color: ${Color.colors.blue};
    display:flex;
    justify-content:end;
    align-items:center;
`

export const TextWrap = styled.div`
    color: white;
    font-size: 1.2rem;
    width: 10rem;
    display:flex;
    justify-content: space-between;

    > div:hover {
        cursor: pointer;
        border-bottom: 2px solid white;
    }
`