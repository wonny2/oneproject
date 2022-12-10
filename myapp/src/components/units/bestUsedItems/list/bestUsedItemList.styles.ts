import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const ContentsWrap = styled.div`
    width:75rem;
`

export const CardWrap = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    margin-bottom:30px;
`

export const Card = styled.div`
    width: 15rem;
    height: 18rem;
    box-shadow: 1px 1px 3px gray;
    display:flex;
    flex-direction: column;
    align-items:center; 
    justify-content: space-around;
    text-align:center;
    border-radius:15px;
    transition: all 0.3s ease-out;
    cursor: pointer;

    > img {
        width:100%;
        height:19vh;
        object-fit:cover;
        border-radius:15px;
    }

    > div:nth-child(2) {
        font-size:22px;
        font-weight: 700;
        color: rgba(30, 130, 76);
    } 

    > div:nth-child(3) {
        
    }

    > :last-child {
        color: gray;
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

export const Image = styled.img`
    width:100%;
    height:10vh;
    object-fit:cover;
    border-radius:15px;
`