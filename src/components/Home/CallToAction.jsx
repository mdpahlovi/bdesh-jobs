import PromoVideo from "../../assets/cta/promo-video-home.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Bdjobs from "../../assets/cta/Bdjobs-logo.png";
import IOM from "../../assets/cta/IOM.png";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { CgClose } from "react-icons/cg";

const CallToAction = () => {
    // Swiper Settings
    const params = {
        slidesPerView: 1,
        spaceBetween: 16,
        style: {
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
        },
    };

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="container my-14 flex flex-col lg:flex-row gap-10">
            <div>
                <h2 className="mb-6">Bdesh Jobs, in trust and reliance</h2>
                <div onClick={() => setIsOpen(true)}>
                    <img src={PromoVideo} alt="Promotional Video" className="rounded-lg w-full lg:w-auto" />
                </div>
            </div>
            <div>
                <h2 className="mb-6">Jointly Organized</h2>
                <div className="w-full lg:w-[368px] mr-auto">
                    <Swiper {...params}>
                        <SwiperSlide>
                            <OrgBox link="http://www.bdjobs.com/bn/defaultbn.asp" image={Bdjobs} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <OrgBox link="https://bangladesh.iom.int/" image={IOM} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* Youtube Video Modal */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-content bg-opacity-40" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative w-full max-w-4xl overflow-hidden rounded-lg aspect-video group">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="absolute p-2.5 bg-content/50 rounded-full top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                    >
                                        <CgClose size={24} className="text-white" />
                                    </button>
                                    <iframe
                                        src="https://www.youtube.com/embed/e3wpqRBmWGU"
                                        title="YouTube video player"
                                        className="w-full h-full"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen
                                    ></iframe>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default CallToAction;

const OrgBox = ({ link, image }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="lg:w-44 h-24 box p-0 flex justify-center items-center mb-10 xs:mb-0">
            <img src={image} alt="" />
        </a>
    );
};
