import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    margin-bottom: 50px;
`

export const InputWraps = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width: 23rem;
`

export const ColumnWrap = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:20px;
`



export const Text = styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 7px;
`

export const Input = styled.input`
    width: 10rem;
    height: 2.2rem;
    font-size: 20px;
    border: 1px solid #C5D5C5;
    border-radius:10px;
    outline: none;
    font-size: 14px;
    padding-left: 15px;
`

export const Contents = styled.textarea`
    width: 27rem;
    height: 8rem;
    font-size: 17px;
    border: 1px solid #C5D5C5;
    border-radius:10px;
    outline: none;
    padding:20px;
    font-family: 'Humanbumsuk';
    margin-bottom:20px;
`

export const Title = styled.div`
    font-size: 32px;
    font-weight: 700;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #8FBC8F;
    color: #49592A;
    margin-bottom: 30px;
`

export const SubmitBtn = styled.button`
    width:90px;
    height: 40px;
    line-height:40px;
    text-align:center;
    font-weight: 500;
    background-color: rgba(30, 130, 76);
    border-radius: 10px;
    border: none;
    color: white;
    cursor: pointer;
    font-family: 'Humanbumsuk';
    `