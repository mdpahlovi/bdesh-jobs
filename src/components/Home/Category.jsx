import { Tab } from "@headlessui/react";
import React from "react";
import { HiTag } from "react-icons/hi2";
import MakeBio from "../../assets/cta/make-bio.png";
import SentCV from "../../assets/cta/thousand_cv.png";

const Category = () => {
    return (
        <div className="w-full h-max relative">
            <Tab.Group>
                <div className="absolute -top-28 sm:-top-[4.25rem] w-full flex flex-wrap justify-between gap-4">
                    <h2 className="flex items-center gap-2">
                        <HiTag />
                        Category
                    </h2>
                    <Tab.List className="w-64 lg:w-72 whitespace-nowrap bg-background-sec rounded-lg border-2 border-primary grid grid-cols-[auto_auto] lg:grid-cols-2">
                        <Tab
                            className={({ selected }) =>
                                classNames("button w-full rounded rounded-r-none", selected ? "bg-primary text-background-sec" : "text-primary")
                            }
                        >
                            Special skilled
                        </Tab>
                        <Tab
                            className={({ selected }) =>
                                classNames("button w-full rounded rounded-l-none", selected ? "bg-primary text-background-sec" : "text-primary")
                            }
                        >
                            General
                        </Tab>
                    </Tab.List>
                </div>
                <Tab.Panels>
                    <Tab.Panel className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                        {[...Array(12)].map((a, i) => (
                            <div key={i} className="box h-max">
                                Pahlovi
                            </div>
                        ))}
                    </Tab.Panel>
                    <Tab.Panel className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                        {[...Array(12)].map((a, i) => (
                            <div key={i} className="box h-max">
                                Hanna
                            </div>
                        ))}
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <CTACard bgColor="bg-[#036DC5]" image={SentCV}>
                    <p>হাজারো চাকরির মাঝে আপনার পছন্দের চাকরি খুঁজে আবেদন করতে জয়েন করুন আমাদের সাইটে।</p>
                    <LinkButton link="https://bdesh.bdjobs.com/registration/createaccount_bdesh.asp" />
                </CTACard>
                <CTACard bgColor="bg-[#6047AF]" image={MakeBio}>
                    <h4 className="-mb-1">বায়োডাটা তৈরি করতে চান?</h4>
                    <p className="text-sm font-medium">সহজ কয়েকটি ধাপে এখনই স্বল্প সময়েই তৈরি করুন আপনার সিভি</p>
                    <LinkButton link="https://bdesh.bdjobs.com/registration/createaccount_bdesh.asp" />
                </CTACard>
            </div>
        </div>
    );
};

export default Category;

// Utilities
const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
};
const LinkButton = ({ link }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="button font-semibold bg-[#FFDC79] text-xs">
            একাউণ্ট খুলুন
        </a>
    );
};
const CTACard = ({ bgColor, image, children }) => {
    return (
        <div className={`relative box p-0 ${bgColor} text-white grid grid-cols-[4fr_8fr] xs:grid-cols-[3fr_9fr]`}>
            <div className="bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})` }} />
            <div className="p-5 space-y-2">{children}</div>
        </div>
    );
};
