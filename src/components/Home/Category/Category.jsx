import { Tab } from "@headlessui/react";
import { HiTag } from "react-icons/hi2";
import MakeBio from "../../../assets/cta/make-bio.png";
import SentCV from "../../../assets/cta/thousand_cv.png";
import { generals, spacial_categories } from "../Datas";
import TabPanel from "./TabPanel";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useState } from "react";

const Category = () => {
    const [isLess, setIsLess] = useState(false);

    return (
        <div className="w-full h-max relative">
            {/* Categories Section */}
            <Tab.Group>
                <div className="absolute -top-28 sm:-top-[4.25rem] w-full flex flex-wrap justify-between gap-4">
                    <h2 className="flex items-center gap-2">
                        <HiTag />
                        Category
                    </h2>
                    <Tab.List className="w-64 lg:w-72 whitespace-nowrap bg-background-sec rounded-lg border-2 border-primary grid grid-cols-[auto_auto] lg:grid-cols-2">
                        <TabName name="Special skilled" left />
                        <TabName name="General" />
                    </Tab.List>
                </div>
                <Tab.Panels>
                    <TabPanel array={spacial_categories} isLess={isLess} setIsLess={setIsLess} />
                    <TabPanel array={generals} isLess={isLess} setIsLess={setIsLess} />
                </Tab.Panels>
            </Tab.Group>
            {/* Category Length Toggle */}
            <button onClick={() => setIsLess(!isLess)} className="mt-4 bg-[#FFDC79] w-full shadow grid grid-cols-2 lg:hidden">
                <span className="text-right -mr-10">{isLess ? "See Less" : "See More"}</span>
                {isLess ? <TiArrowSortedUp size={24} className="ml-auto" /> : <TiArrowSortedDown size={24} className="ml-auto" />}
            </button>
            {/* Call To Action Section */}
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

// Some Simple Utilities Function For This Component
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
const TabName = ({ name, left }) => {
    return (
        <Tab
            className={({ selected }) =>
                classNames(`button w-full rounded ${left ? "rounded-r-none" : "rounded-l-none"}`, selected ? "bg-primary text-background-sec" : "text-primary")
            }
        >
            {name}
        </Tab>
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
