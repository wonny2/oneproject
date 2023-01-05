import { useInView } from "react-intersection-observer"
import * as L from './landing.styles'


export default function LandingThird() {

    const [ref, inView] = useInView({
        threshold:0,
        triggerOnce: true,
    });

    return(
        <>
            <div ref={ref}>
                <L.WholeWrap>
                    
                </L.WholeWrap>
            </div>
        </>
    )
}