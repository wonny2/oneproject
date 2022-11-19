import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`

export const ImgWrap = styled.div`

    & img {
        width:100%;
        max-height:400px;
        object-position: center;
        object-fit: cover;
    }
`
export const Num = styled.div`
    width:50px;
    height: 30px;
    border-radius:15px;
    display:flex;
    align-items:center;
    justify-content:center;
`