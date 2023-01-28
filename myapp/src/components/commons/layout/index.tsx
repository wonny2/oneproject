import Header from "./header"
import styled from "@emotion/styled"
import { ReactNode } from "react";
import Slick from "../slick";
import { useRouter } from "next/router";
import BasketList from "./basketList";
import Footer from "./footer";


const Body = styled.div``

interface ILayoutProps {
    children: ReactNode;
}

export default function Layout(props: ILayoutProps) {

    const router = useRouter();

    // 히든 영역 만들기
    //첫 번째 | asPath 경로 만들기. 만약 여러 페이지에서 헤더를 안 보여줄 수 있으니까 배열로 만드는 것
    const HIDDEN_HEADER_PATH = [
        '/boards/new',
        '/boards/login',
        '/boards/signup',
        '/'
];

    // 두 번째 | hidden page가 있으면 true 보여주는 것이고, false이면 안 보여주는 것!
    const hiddenHeader = HIDDEN_HEADER_PATH.includes(router.asPath)
    const hiddenFooter = HIDDEN_HEADER_PATH.includes(router.asPath)
    
    return(
        <>
            {!hiddenHeader && <Header />}
            {/* {!hiddenHeader && <BasketList />} */}
                <Body>{props.children}</Body>
            {!hiddenFooter && <Footer />}
        </>
    )
}