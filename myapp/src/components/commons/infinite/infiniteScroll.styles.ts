import styled from "@emotion/styled";



export const Wrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    border: 1px solid black;
`
export const ContentsWrap = styled.div`
    width:75rem;
`
export const CardWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

export const Card = styled.div`
    background-color: white;
    border:3px solid black;
    width:12.5rem;
    height:18.75rem;
    margin-bottom: 40px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
`


export const Title = styled.div`
    font-size: 20px;
    background-color: lightgreen;
    cursor: pointer;
    width:100%;
    height: 2.6rem;
    text-overflow: ellipsis;
    overflow: hidden;
`

export const Img = styled.img`
    width:100%;
    height:12rem;
`

export const Writer = styled.div`
    font-size: 1.5rem;
    font-weight:670;
`

export const Time = styled.div`
    color: gray;
    font-size: 15px;
    display:flex;
    border:1px solid black;
    width:100%;
`