import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import * as S from './slick.presenter'
import { useState } from "react";


export default function Slick() {

    const settings = {
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        // vertical : true, // 세로 방향 슬라이드
        beforeChange: (slide:number) => setCurrentSlide(slide)
      };

      const items = [
        { id: 1, url: "/images/1.jpeg"},
        { id: 2, url: "/images/2.png" },
        { id: 3, url: "/images/3.png" },
        { id: 4, url: "/images/4.png" },
        { id: 5, url: "/images/5.png" }
      ];

      const [currentSlide, setCurrentSlide] = useState(0)

    return(

        <S.Wrapper>
            <Slider {...settings}>
                {items.map((item) => (
                        <S.ImgWrap key={item.id}>
                            <img src={item.url} alt={item.url}/>
                        </S.ImgWrap>
                ))}
            </Slider>
            <S.Num>{currentSlide + 1} / {items.length}</S.Num>
        </S.Wrapper>
    )
}