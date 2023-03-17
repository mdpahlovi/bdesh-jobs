import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Slide01 from "../../../assets/hero_slide/slide-00.jpg";
import Slide02 from "../../../assets/hero_slide/slide-01.jpg";
import Slide03 from "../../../assets/hero_slide/slide-02.jpg";
import Slide04 from "../../../assets/hero_slide/slide-03.jpg";
import Slide05 from "../../../assets/hero_slide/slide-04.jpg";
import Slide06 from "../../../assets/hero_slide/slide-05.jpg";

const Slider = () => {
    const params = {
        slidesPerView: 1,
        style: { "--swiper-navigation-size": "24px", "--swiper-navigation-color": "#fff", "--swiper-navigation-sides-offset": "24px" },
        navigation: true,
        modules: [Navigation],
    };
    return (
        <div className="max-w-full my-auto col-span-full lg:col-span-1">
            <Swiper {...params}>
                <SwiperSlide>
                    <img src={Slide01} alt="" className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide02} alt="" className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide03} alt="" className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide04} alt="" className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide05} alt="" className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide06} alt="" className="w-full" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
