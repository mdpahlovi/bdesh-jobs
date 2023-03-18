import { Tab } from "@headlessui/react";
import React from "react";
import { HiTag } from "react-icons/hi2";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Category = () => {
    return (
        <div className="mb-10 w-full h-max relative">
            <Tab.Group>
                <div className="absolute -top-[4.25rem] w-full flex justify-between">
                    <h2 className="flex items-center gap-2">
                        <HiTag />
                        Category
                    </h2>
                    <Tab.List className="w-72 whitespace-nowrap bg-background-sec rounded-lg border-2 border-primary grid grid-cols-2">
                        <Tab className={({ selected }) => classNames("button w-full rounded rounded-r-none", selected ? "bg-primary text-background-sec" : "")}>
                            Special skilled
                        </Tab>
                        <Tab className={({ selected }) => classNames("button w-full rounded rounded-l-none", selected ? "bg-primary text-background-sec" : "")}>
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
            <div className="mt-6 grid grid-cols-2 gap-8">
                <div className="box p-0 bg-[#036DC5] text-white grid grid-cols-[3fr_9fr]">
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div className="p-5 space-y-2">
                        <p>হাজারো চাকরির মাঝে আপনার পছন্দের চাকরি খুঁজে আবেদন করতে জয়েন করুন আমাদের সাইটে।</p>
                        <a
                            href="https://bdesh.bdjobs.com/registration/createaccount_bdesh.asp"
                            target="_blank"
                            rel="noreferrer"
                            className="button font-semibold bg-[#FFDC79] text-xs"
                        >
                            একাউণ্ট খুলুন
                        </a>
                    </div>
                </div>
                <div className="box p-0 bg-[#6047AF] text-white grid grid-cols-[3fr_9fr]">
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div className="p-5 space-y-2">
                        <h4 className="-mb-1">বায়োডাটা তৈরি করতে চান?</h4>
                        <p className="text-sm font-medium">সহজ কয়েকটি ধাপে এখনই স্বল্প সময়েই তৈরি করুন আপনার সিভি</p>
                        <a
                            href="https://bdesh.bdjobs.com/registration/createaccount_bdesh.asp"
                            target="_blank"
                            rel="noreferrer"
                            className="button font-semibold bg-[#FFDC79] text-xs"
                        >
                            একাউণ্ট খুলুন
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
