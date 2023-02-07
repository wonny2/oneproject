import styled from "@emotion/styled";
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';


export const Wrapper = styled.div`
    width: 100%;
    height: 250px;
    background-color: lightgray;
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    padding: 40px 150px;
`

export const TextWrap = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
`

export const Title = styled.div`
    font-weight: bold;
    font-size: 24px;
    color: gray;
`

export const Text = styled.div`
    color: gray;
    font-size: 12px;
`

export const IconWrap =  styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    width: 140px;
`

export const Google = styled(GoogleIcon)`
    font-size: 30px;
    color: gray;
    cursor: pointer;
`

export const Insta = styled(InstagramIcon)`
    font-size: 30px;
    color: gray;
    cursor: pointer;
`

export const Git = styled(GitHubIcon)`
    font-size: 30px;
    color: gray;
    cursor: pointer;
`