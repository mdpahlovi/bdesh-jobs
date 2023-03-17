import { jobs_in_country } from "../Datas";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const JobsInCountry = () => {
    const params = {
        slidesPerView: 1,
        spaceBetween: 16,
        style: {
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-bullet-size": "12px",
        },
        pagination: {
            clickable: true,
        },
        modules: [Pagination],
        breakpoints: {
            448: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            },
            1280: {
                slidesPerView: 6,
            },
        },
    };

    return (
        <section className="py-14 relative z-[1] bg-country bg-cover">
            <div className="container">
                <h2 className="text-center mb-6 text-background-sec">Jobs in different countries</h2>
                <Swiper {...params}>
                    {jobs_in_country.map(({ image, country, vacancy }, index) => (
                        <SwiperSlide key={index} className="box p-0 mb-10">
                            <div className="relative z-[1]">
                                <div
                                    className="bg-overly bg-no-repeat bg-[center_right] bg-[length:50%] opacity-10"
                                    style={{ backgroundImage: `url(${image})` }}
                                />
                                <div className="p-5 text-center">
                                    <h2 className="text-[#00796B]">{vacancy}</h2>
                                    <p>Vacancies</p>
                                </div>
                            </div>
                            <h3 className="py-2 px-5 bg-content text-background-sec text-center rounded-b-lg">{country}</h3>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="bg-overly" style={{ backgroundColor: "rgba(0, 150, 136, 0.9)" }} />
        </section>
    );
};

export default JobsInCountry;
