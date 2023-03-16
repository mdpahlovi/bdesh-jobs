import React from "react";
import Header from "../components/UserGuides/Header";
import { HiHome } from "react-icons/hi2";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { Disclosure } from "@headlessui/react";

const data = [
    {
        title: "বিদেশ জবস্ এর গাইডলাইন",
        details: [
            { link: "https://bdesh.bdjobs.com/User_guide_foreign_job.asp?ug=1", text: "বিদেশ জবস্-নির্দেশিকা" },
            { link: "https://bdesh.bdjobs.com/User_guide_digital.asp?ug=2", text: "বিদেশে যাওয়ার গাইডলাইন" },
            { link: "https://bdesh.bdjobs.com/User_guide_preparation.asp?ug=3", text: "বিদেশে চাকরির পূর্ব প্রস্তুতি" },
            {
                text: "বিদেশে যাওয়ার প্রাসঙ্গিক কাজ",
                child_data: [
                    { c_link: "https://bdesh.bdjobs.com/User_guide_relevent_works.asp?ug=4_1#register_name", c_text: "নাম নিবন্ধন" },
                    { c_link: "https://bdesh.bdjobs.com/User_guide_relevent_works.asp?ug=4_2#create_nid_birthcertificate", c_text: "নাগরিক ও জন্মসনদ তৈরি" },
                    { c_link: "https://bdesh.bdjobs.com/User_guide_relevent_works.asp?ug=4_3#get_certificate", c_text: "নাগরিক সনদপত্র পেতে করণীয়" },
                    { c_link: "https://bdesh.bdjobs.com/User_guide_relevent_works.asp?ug=4_4#get_birthCertificate", c_text: "জন্ম সনদপত্র পেতে করণীয়" },
                    { c_link: "https://bdesh.bdjobs.com/User_guide_relevent_works.asp?ug=4_5#make_passport", c_text: "পাসপোর্ট তৈরি" },
                    { c_link: "https://bdesh.bdjobs.com/User_guide_relevent_works_step2.asp?ug=5_1#visaProcessing_check", c_text: "ভিসা সংগ্রহ ও যাচাই" },
                    { c_link: "https://bdesh.bdjobs.com/User_guide_relevent_works_step2.asp?ug=5_2#job_agreement", c_text: "চাকরির চুক্তিপত্র" },
                    { c_link: "https://bdesh.bdjobs.com/User_guide_relevent_works_step2.asp?ug=5_3#create_bankAccount", c_text: "ব্যাংক অ্যাকাউন্ট তৈরি" },
                    { c_link: "https://bdesh.bdjobs.com/User_guide_relevent_works_step2.asp?ug=5_4#health_checking", c_text: "স্বাস্থ্য পরীক্ষা" },
                    { c_link: "https://bdesh.bdjobs.com/User_guide_relevent_works_step3.asp?ug=6_1#bmit_briefing", c_text: "বিএমইটি'র ব্রিফিং" },
                    {
                        c_link: "https://bdesh.bdjobs.com/User_guide_relevent_works_step3.asp?ug=6_2#smartCard_clearanceCard",
                        c_text: "স্মার্ট বা ইমিগ্রেশন ক্লিয়ারেন্স কার্ড",
                    },
                ],
            },
            { link: "https://bdesh.bdjobs.com/User_guide_need_to_be_done.asp?ug=7", text: "বিদেশের যাত্রাপথে করনীয়" },
            { link: "https://bdesh.bdjobs.com/User_guide_lifestyle.asp?ug=8", text: "বিদেশে জীবনযাত্রা" },
        ],
    },
    {
        title: "সরকারি গুরুত্বপূর্ণ লিংক সমূহ",
        details: [
            { link: "http://www.dip.gov.bd/", text: "ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর" },
            { link: "http://www.bteb.gov.bd", text: "বাংলাদেশ কারিগরি শিক্ষা বোর্ড" },
            { link: "http://www.bmet.gov.bd", text: "জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো" },
            { link: "https://probashi.gov.bd/", text: "প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়" },
        ],
    },
];

const Test = () => {
    return (
        <main>
            <Header title="বিদেশে যাওয়ার প্রাসঙ্গিক কাজ" />
            <div className="container grid grid-cols-[1fr_16.5rem] gap-8 my-8">
                <div className="w-full box p-8">Pahlovi</div>
                <div className="space-y-4">
                    <div className="flex items-center gap-2 box text-primary font-medium">
                        <HiHome size={24} /> হোম
                    </div>
                    {data.map(({ title, details }, index) => (
                        <div key={index} className="box space-y-3">
                            <h4 className="font-bold">{title}</h4>
                            <div className="[&>*]:text-sm space-y-2.5 flex flex-col">
                                {details.map(({ link, text, child_data }, index) =>
                                    link ? (
                                        <a key={index} href={link} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary">
                                            <span>
                                                <HiOutlineExternalLink size={16} />
                                            </span>
                                            {text}
                                        </a>
                                    ) : (
                                        <Disclosure key={index}>
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="p-0 flex items-center gap-1">
                                                        <span>{open ? <IoMdArrowDropdown size={20} /> : <IoMdArrowDropright size={20} />}</span>
                                                        <span className={open ? "text-primary" : "hover:text-primary"}>{text}</span>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="[&>*]:text-sm space-y-2.5 flex flex-col">
                                                        {child_data.map(({ c_link, c_text }) => (
                                                            <a
                                                                key={index}
                                                                href={c_link}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="pl-4 flex items-center gap-2 hover:text-primary"
                                                            >
                                                                <span>
                                                                    <HiOutlineExternalLink size={16} />
                                                                </span>
                                                                {c_text}
                                                            </a>
                                                        ))}
                                                    </Disclosure.Panel>{" "}
                                                </>
                                            )}
                                        </Disclosure>
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Test;
