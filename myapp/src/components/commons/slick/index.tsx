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
        afterChange: (slide:Number) => setCurrentSlide(slide,Number)
      };

      const items = [
        { id: 1, url: "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg"},
        { id: 2, url: "https://images.mypetlife.co.kr/content/uploads/2021/10/26155738/flouffy-DI6blvti51g-unsplash-edited-scaled.jpg" },
        { id: 3, url: "https://images.mypetlife.co.kr/content/uploads/2021/10/26160036/pexels-ron-lach-9985937-edited-scaled.jpg" },
        { id: 4, url: "https://images.mypetlife.co.kr/content/uploads/2021/10/26155651/nathan-hanna-7hxC83Qcuwo-unsplash-edited-scaled.jpg" },
        { id: 5, url: "https://p4.wallpaperbetter.com/wallpaper/663/437/134/best-friends-bulldog-cute-dog-photos-dog-images-wallpaper-preview.jpg" }
      ];

      const [currentSlide, setCurrentSlide] = useState(0)

    return(

        <S.Wrapper>
            <Slider {...settings}>
                {items.map((item) => (
                    <>
                        <S.ImgWrap key={item.id}>
                            <img src={item.url} alt={item.url}/>
                        </S.ImgWrap>
                    </>
                ))}
            </Slider>
            <S.Num>{currentSlide + 1} / {items.length}</S.Num>
        </S.Wrapper>
    )
}