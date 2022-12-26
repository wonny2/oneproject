import { WeiboCircleFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:120px;
    height:270px;
    padding:10px;
    border: 1px solid black;
    z-index: 999;
    position:fixed;
    top:550px;
    right: 50px;
    background-color: lightcyan;
    /* top: 600px; */
`

export const Title = styled.div`
    font-size: 18px;
    margin-bottom: 20px;
`

export const Item = styled.img`
    width: 80px;
    height: 70px;
    margin-bottom:20px;
    object-fit: cover;
`