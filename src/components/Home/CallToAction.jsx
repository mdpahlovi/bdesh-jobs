import PromoVideo from "../../assets/cta/promo-video-home.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Bdjobs from "../../assets/cta/Bdjobs-logo.png";
import IOM from "../../assets/cta/IOM.png";

const OrgBox = ({ link, image }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="lg:w-44 h-24 box p-0 flex justify-center items-center mb-10 xs:mb-0">
            <img src={image} alt="" />
        </a>
    );
};

const CallToAction = () => {
    return (
        <div className="container my-14 flex flex-col lg:flex-row gap-10">
            <div>
                <h2 className="mb-6">Bdesh Jobs, in trust and reliance</h2>
                <a href="https://youtu.be/e3wpqRBmWGU">
                    <img src={PromoVideo} alt="Promotional Video" className="rounded-lg w-full lg:w-auto" />
                </a>
            </div>
            <div>
                <h2 className="mb-6">Jointly Organized</h2>
                <div className="w-full lg:w-[368px] mr-auto">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={16}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        breakpoints={{
                            448: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <OrgBox link="http://www.bdjobs.com/bn/defaultbn.asp" image={Bdjobs} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <OrgBox link="https://bangladesh.iom.int/" image={IOM} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
