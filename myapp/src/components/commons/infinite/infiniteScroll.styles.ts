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
`


export const Title = styled.div`
    font-size: 20px;
    background-color: lightgreen;
`
