
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
    width:75rem;
    display:flex;
    flex-direction:column;
`

export const TopFour = styled.div`
    height: 80px;
    line-height:80px;
    font-size: 5.32rem;
    text-align:center;
    background: linear-gradient(to right top, #1e824c, white );
    color: transparent;
    -webkit-background-clip: text;
    margin-bottom: 25px;
`

export const CardWrap = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    margin-bottom:30px;
    border-radius:15px;
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

    > img {
        width:100% ;
        height: 12rem;
        object-fit: cover;
        border-top-left-radius:10px;
        border-top-right-radius:10px;
        margin-bottom: 15px;
    }

    > div:nth-child(2) {
        font-size:23px;
        font-weight: 700;
        color: rgba(30, 130, 76);
        margin-bottom: 15px;
    } 

    > div:nth-child(3) {
        font-size:15px;
        margin-bottom: 15px;
    }

    > :last-child {
        width:100%;
        font-size: 12px;
        color: gray;
        display:flex;
        justify-content:end;
        padding: 0 10px;
    }

    :hover{
        transform: translateY(-30px);
    }
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