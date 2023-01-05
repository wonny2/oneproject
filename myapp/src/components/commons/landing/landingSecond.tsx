import { useInView } from "react-intersection-observer"
import * as L from './landing.styles'

export default function LandingSecond() {

    const [ref, inView] = useInView({
        threshold:0,
        triggerOnce: true,
    })


    return(
        <>
            <div ref={ref}>
                <L.WholeWrap>  
                    <div>2페이지</div>
                </L.WholeWrap>
            </div>
        </>
    )
}