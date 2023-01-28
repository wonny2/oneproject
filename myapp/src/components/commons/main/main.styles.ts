import styled from "@emotion/styled";

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

