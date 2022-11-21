import Header from "./header"
import styled from "@emotion/styled"
import { ReactNode } from "react";
import Slick from "../slick";


const Body = styled.div`
    display: flex;
`
interface ILayoutProps {
    children: ReactNode;
}

export default function Layout(props: ILayoutProps) {

    return(
        <>
            <Header />
            <Body>{props.children}</Body>
        </>
    )
}