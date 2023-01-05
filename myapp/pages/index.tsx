import LandingFirst from "../src/components/commons/landing/landingFirst";
import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import LandingSecond from "../src/components/commons/landing/landingSecond";
import LandingThird from "../src/components/commons/landing/landingThird";


const Wrapper = styled.section`
    overflow: scroll;
    scroll-snap-type: y mandatory; // 한 페이지씩 보이도록 scroll조정!
    width:100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    scroll-behavior: smooth;

    ::-webkit-scrollbar { // 스크롤바 안보이게 함!
    width: 0;
    background-color: transparent;
  }

    & > div {
        scroll-snap-align: start;
    }
`


export default function Main() {

    return(
        <Wrapper>
            <LandingFirst />
            <LandingSecond />
            <LandingThird />
        </Wrapper>
    )
};