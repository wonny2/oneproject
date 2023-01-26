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
                <L.WholeWrapSecond>  
                    <L.ScrollWrap>
                        <L.Scroll />
                        <L.Arrow />
                    </L.ScrollWrap>
                </L.WholeWrapSecond>
            </div>
        </>
    )
}