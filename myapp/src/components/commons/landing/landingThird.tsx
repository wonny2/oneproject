import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer"
import * as L from './landing.styles'


export default function LandingThird() {

    const [ref, inView] = useInView({
        threshold:0,
        root: null,
    });

    // const props = useSpring({ number: Math.floor(211), from: { number: 1 } });

    const router = useRouter();

    const MoveToMain = () => {
        router.push('/boards')
    }

    return(
        <>
            <div ref={ref}>
                <L.WholeWrapThird>
                    <L.ThirdContentsWrap>
                        <L.Button onClick={MoveToMain}>들 어 가 기</L.Button>
                    </L.ThirdContentsWrap>
                    
                </L.WholeWrapThird>
            </div>
        </>
    )
}