import { useInView } from "react-intersection-observer"
import * as L from './landing.styles'


export default function LandingThird() {

    const [ref, inView] = useInView({
        threshold:0,
        root: null,
    });

    // const props = useSpring({ number: Math.floor(211), from: { number: 1 } });


    return(
        <>
            <div ref={ref}>
                <L.WholeWrapThird>
                    
                </L.WholeWrapThird>
            </div>
        </>
    )
}