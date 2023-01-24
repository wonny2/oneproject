import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const ContentsWrap = styled.div`
    width:81.25rem;
`
export const CardWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

export const Card = styled.div`
    /* padding: 10px; */
    background-color: white;
    height: 23rem;
    margin:10px;
    border: 1px solid gray;
    border-radius: 10px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    cursor: pointer;
    overflow:hidden;
`


export const Title = styled.div`
    font-size: 20px;
    cursor: pointer;
    width:100%;
    height: 2.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 10px;
`

export const Img = styled.img`
    width:100%;
    height:12rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
    transition: all 0.15s linear;

    :hover{
        transform: scale(1.1);
    }
`

export const Writer = styled.div`
    font-size: 1.5rem;
    font-weight:670;
`

export const Time = styled.div`
    color: gray;
    font-size: 15px;
    display:flex;
    justify-content:flex-end;
    width:100%;
    padding: 0 10px;
`