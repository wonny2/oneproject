import { WeiboCircleFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:120px;
    height:270px;
    padding:10px;
    border: 3px solid black;
    z-index: 999;
    position:fixed;
    top:550px;
    right: 50px;
    background-color: lightcyan;
    /* top: 600px; */
`

export const Title = styled.div`
    font-size: 18px;
    margin-bottom: 10px;
`

export const Item = styled.img`
    width: 5rem;
    height: 60px;
    margin-bottom:10px;
    z-index:999;
`