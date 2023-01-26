import { useInView } from "react-intersection-observer"
import * as L from './landing.styles'
// import { useSpring } from "@react-spring/web";


export default function LandingFirst() {

    const [ref, inView] = useInView({
        threshold:0,
        root: null,
    });

    return(
        <>
            <L.WholeWrapFirst>
                <L.ScrollWrap>
                    <L.Scroll />
                    <L.Arrow />
                </L.ScrollWrap>
            </L.WholeWrapFirst>
        </>
    )
}