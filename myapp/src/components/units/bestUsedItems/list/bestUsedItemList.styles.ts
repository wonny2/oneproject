import { breakPoints } from "../../../../commons/styles/media";
import styled from "@emotion/styled";


interface ImageUrlProps{
    images: any
};


export const Wrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const ContentsWrap = styled.div`
    width: 75rem; // 1200px
    display:flex;
    flex-direction:column;
    align-items:center;

    @media ${breakPoints.mobile} {
        width: 100%;
        font-size: 2.5rem;
    }

    @media ${breakPoints.tablet} {
        width: 100%;
    }

    @media ${breakPoints.desktop} {
        width: 100%;
    }
`

export const TopFour = styled.div`
    height: 5rem;
    width: 35rem;
    line-height:5rem;
    font-size: 5.32rem;
    text-align:center;
    background: linear-gradient(to right top, #1e824c, white );
    color: transparent;
    background-clip: text;
    margin-bottom: 25px;


    @media ${breakPoints.mobile} {
        width: 16rem;
        height: 4rem;
        font-size: 2.5rem;
    }

    @media ${breakPoints.tablet} {
        
    }

    @media ${breakPoints.desktop} {
        
    }
`


export const CardWrap = styled.div`
    width: 100%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    margin-bottom: 30px;
    border-radius: 15px;

    @media ${breakPoints.mobile} {
        display:grid;
        grid-template-columns: repeat(2, 10rem);
        grid-row-gap: 20px;
        place-items: center;

    }

    @media ${breakPoints.tablet} {
        display:grid;
        grid-template-columns: repeat(2, 10rem);
        grid-row-gap: 20px;
        width: 37.5rem;
        place-items: center;

    }
`



export const Card = styled.div`
    width: 15rem;
    height: 20rem;
    box-shadow: 1px 1px 3px gray;
    display:flex;
    flex-direction: column;
    align-items:center; 
    text-align:center;
    border-radius:15px;
    transition: all 0.2s ease-out;
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
    width:100% ;
    height: 12rem;
    object-fit: cover;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    margin-bottom: 15px;
    
`

export const Name = styled.div`
    font-size:23px;
    font-weight: 700;
    color: rgba(30, 130, 76);
    margin-bottom: 15px;
`

export const Contents = styled.div`
    font-size:15px;
    margin-bottom: 15px;
`

export const Time = styled.div`
    width:100%;
    font-size: 12px;
    color: gray;
    display:flex;
    justify-content:end;
    padding: 0 10px;
`

export const MenuBar = styled.div`
    width:100%;
    height: 2.6rem;
    background-color: rgba(30, 130, 76);
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