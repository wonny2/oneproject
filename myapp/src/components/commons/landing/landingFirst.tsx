import { useInView } from "react-intersection-observer"
import * as L from './landing.styles'
// import { useSpring } from "@react-spring/web";


export default function LandingFirst() {

    const [ref, inView] = useInView({
        threshold:0,
        root: null,
    });

    // const props = useSpring({ number: Math.floor(211), from: { number: 1 } });

    return(
        <>
            <div ref={ref}>
                <L.Wrapper>
                    <L.Wrap className={inView ? "isActive" : ""} ref={ref}>
                        <L.Img
                            className={inView ? "isActive" : ""}
                            ref={ref}
                            src="https://ditoday.com/wp-content/uploads/2022/01/%ED%81%B4%EB%9E%98%EC%8A%A4101-%EC%82%AC%EC%A7%84%EC%9E%90%EB%A3%8C-1-%EB%8F%84%EB%A5%B4%EB%AF%B8-%EB%B6%88%EB%A0%9B%EC%A0%80%EB%84%90-%EB%8B%A4%EC%9D%B4%EC%96%B4%EB%A6%AC-%EC%9E%85%EB%AC%B8%ED%95%98%EA%B8%B0.jpeg"/> 
                        <L.ContentsWrap className={inView ? "isActive" : ""} ref={ref}>
                            <L.ColumnWrap className={inView ? "isActive" : ""} ref={ref}>
                                <L.H1>이제 혼자서 <br /> 꾸미는 다이어리는</L.H1>
                                <L.Bold>Nope!</L.Bold>
                            </L.ColumnWrap>
                        </L.ContentsWrap>
                    </L.Wrap>

                    <L.ScrollWrap>
                        <L.Text>Scroll Down</L.Text>
                        <L.Scroll />
                        <L.Arrow />
                    </L.ScrollWrap>
                    
                </L.Wrapper>
            </div>
        </>
    )
}