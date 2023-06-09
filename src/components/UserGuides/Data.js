import CreatingCitizensAndBirthCenters from "../../assets/guides_blogs/creating_citizens_and_birth_centers.png";
import GettingBirthCertificate from "../../assets/guides_blogs/getting_birth_certificate.png";
import MakePassport from "../../assets/guides_blogs/make_the_passport.png";
import RegisterName from "../../assets/guides_blogs/register_the_name.png";
import GetCitizenCertificate from "../../assets/guides_blogs/to_get_citizen_certificate.png";
import RelevantWork1 from "../../assets/relevant_work/relevant_work1.png";
import RelevantWork2 from "../../assets/relevant_work/relevant_work2.png";
import RelevantWork3 from "../../assets/relevant_work/relevant_work3.png";
import RelevantWork4 from "../../assets/relevant_work/relevant_work4.png";
import RelevantWork5 from "../../assets/relevant_work/relevant_work5.png";
import RelevantWork6 from "../../assets/relevant_work/relevant_work6.png";
import RelevantWork7 from "../../assets/relevant_work/relevant_work7.png";
import RelevantWork8 from "../../assets/relevant_work/relevant_work8.png";
import RelevantWork9 from "../../assets/relevant_work/relevant_work9.png";
import RelevantWork10 from "../../assets/relevant_work/relevant_work10.png";
import RelevantWork11 from "../../assets/relevant_work/relevant_work11.png";

export const side_penal_data = [
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

export const guides_blog_data = [
    {
        image: CreatingCitizensAndBirthCenters,
        title: "নাম নিবন্ধন",
        details:
            "<p>কর্মজীবি হয়ে বিদেশ যেতে বাধ্যতামূলক ভাবে জনশক্তি, কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো বা বিএমইটি অফিসের অনলাইন ডাটাবেজ নেটওয়ার্কে নাম নিবন্ধন করতে হয়। তবে জেলা কর্মসংস্থান ও জনশক্তি অফিস বা ডেমো অফিস থেকে সংগৃহীত নাম নিবন্ধন ফর্ম পূরণ করে সেখানকার নিবন্ধন সেবা কর্মকর্তার মাধ্যমেও নাম নিবন্ধন করতে পারবেন। নাম নিবন্ধন শেষে আপনি জবসিকার্স তবে মনে রাখবেন, শুধুমাত্র কার্ড বা এমপ্লয়ই রেজিস্ট্রেশন কার্ড হাতে পাবেন। তবে মনে রাখবেন, শুধুমাত্রনাম নিবন্ধন চাকরির নিশ্চিয়তা দেয় না। নিচে কিছু লিংক দেয়া হল, যেগুলো ব্যবহার করে অনলাইনে নাম নিবন্ধনের প্রক্রিয়াসহ নাম নিবন্ধন ফর্ম পূরণের প্রয়োজনীয় নির্দেশাবলী সহজভাবে বুঝতে পারবেন। </p><h4 style='padding-top: 6px;'>অনলাইনে নিবন্ধন ফর্ম পূরণ করার জন্য প্রয়োজনীয় নির্দেশনা- </h4><p>মানসিক প্রস্তুতির পরের ধাপেই হল বিদেশে যাওয়ার জন্য করনীয় কাজ সমূহ ঠিক করা। বিদেশে চাকরির জন্য যেতে প্রথমেই, একজন চাকরিপ্রার্থীকে করতে হবে নাম নিবন্ধন এবং নাগরিক সনদপত্র ও জন্ম সনদপত্র তৈরি কাজ। পাসপোর্ট তৈরির সময় জন্ম সনদ প্রয়োজন হবে, তাই আগেই জন্ম সনদ পেতে করনীয় কাজ গুলো শেষ করতে হবে। নাগরিক সনদপত্র ও জন্ম সনদ হাতে পেলেই পাসপোর্ট তৈরি করে ভিসা সংগ্রহ ও যাচাই করতে হবে। ভিসার কাজ শেষে সংগ্রহ করতে হবে চাকরির চুক্তিপত্র এবং তৈরি করতে হবে একটি ব্যাংক অ্যাকাউন্ট। এবার স্বাস্থ্য পরীক্ষা করে, বিএমইটির ব্রিফিং-এ অংশ নিয়ে স্মার্ট কার্ড বা ইমিগ্রেশন ক্লিয়ারেন্স কার্ড সংগ্রহ করলেই কর্মজীবি হয়ে বিদেশ যাওয়ার মূল কাজ গুলো সম্পন্ন হবে।</p><ul><li><a href='/' style='overflow-wrap: break-word;'>http://www.bmet.org.bd/BMET/onlineRegistration</a> - এই লিংকে ক্লিক করলে বিএমইটি-এর অনলাইন রেজিস্ট্রেশন পেজ আসবে। এখানে অনলাইনের মাধ্যমে ফর্ম পূরণ করে আপনি নিবন্ধন করতে পারবেন।</li><li><a href='/' style='overflow-wrap: break-word;'>http//bmet.org.bd/BMET/downloadRegCard</a> - এ লিংকে ক্লিক করলে নিবন্ধন কার্ড পাবেন। উল্লেখ্য যে, উপরের লিংকে ক্লিক করে বিএমইটি ওয়েবসাইট থেকে অনলাইন এ নাম নিবন্ধন শেষে নিবন্ধন কার্ড পেতে এখানে ক্লিক করতে হবে।</li><li><a href='/' style='overflow-wrap: break-word;'>http://bmet.org.bd/BMET/downloadAction</a> - এ লিংকে ক্লিক করলে জেলা কর্মসংস্থান ও জনশক্তি (ডেমো) অফিসে নাম নিবন্ধনের জন্য যে আবেদনপত্রটি প্রয়োজন তা পাওয়া যাবে। এতে ক্লিক করলে যে পেজটি আসবে, সেখানে ‘ডাউনলোড পিডিএফ ফরমেট রেজিস্ট্রেশন ফর্ম’ অপশনে ক্লিক করে আবেদনপত্রটি আপনার কম্পিউটারে সেভ করতে পারবেন এবং পরে তা প্রিন্ট করে আপনার সকল তথ্য হাতে লিখে আপনার এলাকার সংশ্লিষ্ট জেলা কর্মসংস্থান ও জনশক্তি অফিস বা ডেমো অফিসে গিয়ে জমা দিয়ে চাকরিপ্রার্থী হিসেবে নাম নিবন্ধন করতে পারবেন।</li></ul>",
        note: "বি. দ্র. এমপ্লয়ই রেজিস্ট্রেশন কার্ডের ভুল সংশোধনের জন্য প্রয়োজনীয় আবেদন পত্রটি আপনার সকল তথ্য দিয়ে পূরণ করার পর প্রিন্ট করে স্বাক্ষর সহ সংশ্লিষ্ট অফিসে জমা দিতে হবে।",
    },
    {
        image: GettingBirthCertificate,
        title: "নাগরিক ও জন্মসনদ তৈরি",
        details:
            "<p>কাজের জন্য বিদেশ যেতে জনশক্তি, কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো বা বিএমইটি ডাটাবেজে নাম নিবন্ধন করার সময় আপনার নাগরিক সনদপত্র ও পাসপোর্ট তৈরির সময় জন্ম সনদ প্রয়োজন হবে। তাই আগে থেকেই আপনার নাগরিক সনদপত্র ও জন্ম সনদ তৈরি করে রাখুন।</p>",
    },
    {
        image: MakePassport,
        title: "নাগরিক সনদপত্র পেতে করণীয়",
        details:
            "<p>নাগরিক সনদপত্র পাওয়ার জন্য আপনি যে এলাকার স্থায়ী বাসিন্দা সে এলাকার ইউনিয়ন/পৌরসভা/ওয়ার্ড কাউন্সিল অফিসে যেতে হবে। এক্ষেত্রে, আপনার জাতীয় পরিচয়পত্র, জন্ম সনদ অথবা ইউনিয়ন/পৌরসভা/ওয়ার্ড কাউন্সিলের মেম্বর/কাউন্সিলর/চেয়ারম্যান/মেয়র অফিস থেকে প্রাপ্ত চারিত্রিক সনদপত্র প্রয়োজন হবে। নাগরিক সনদপত্র পেতে ইউনিয়নের ক্ষেত্রে খরচ ৫.০০ (পাঁচ) টাকা, পৌরসভার ক্ষেত্রে খরচ ১০.০০ (দশ) টাকা। এ সনদপত্র পেতে সংশ্লিষ্ট অফিসের সচিবের সাথে যোগাযোগ করতে হবে।</p>",
    },
    {
        image: RegisterName,
        title: "জন্ম সনদপত্র পেতে করণীয়",
        details:
            "<p>জন্ম সনদপত্র পেতে আপনার এলাকার ইউনিয়ন/পৌরসভা/ওয়ার্ড কাউন্সিল অফিসে যেতে হবে। এ সনদপত্রের জন্য সংশ্লিষ্ট অফিস থেকে নির্দিষ্ট আবেদনপত্র সংগ্রহ এবং পূরণ করে জন্ম নিবন্ধন করতে হবে। নাগরিক সনদপত্রের মত এক্ষেত্রেও সংশ্লিষ্ট অফিসের সচিবের সাথে যোগাযোগ করতে হবে। জন্ম নিবন্ধন শেষে জন্ম সনদ নেয়ার জন্য খরচ, বয়স ১৮ বছরের উর্ধে হলে ৫০ টাকা এবং ১৮ বছরের নিচে কোন খরচ নেই। ইউনিয়ন/পৌরসভা/ ওয়ার্ড কাউন্সিল অফিস থেকে সংগ্রহ করা জন্ম সনদের আবেদনপত্রটিতে আপনার সকল তথ্য হাতে লিখে পূরণ করে জমা দিতে হবে।</p>",
    },
    {
        image: GetCitizenCertificate,
        title: "পাসপোর্ট তৈরি",
        details:
            "<p>পাসপোর্ট হল বিদেশে যাওয়ার জন্য বাংলাদেশ সরকারের অনুমোদিত একটি পরিচয়পত্র। পাসপোর্ট না থাকলে আপনি কখনও বিদেশে যেতে পারবেন না। পাসপোর্টের মাধ্যমে বাংলাদেশ সরকার আপনাকে বিদেশে যাওয়ার অনুমতি দেন। তবে যারা নতুন পাসপোর্ট করবেন বা পাসপোর্ট সংশোধন অথবা নবায়ন করবেন তারা অবশ্যই মেশিন রিডেবল পাসপোর্ট করবেন। এখানে উল্লেখ্য যে, ২০১২ সালের পর থেকে হাতে লেখা পাসপোর্ট কোথাও গ্রহণ করা হয় না। তাই যাদের কাছে হাতে লেখা পাসপোর্ট রয়েছে তারা মেশিন রিডেবল পাসপোর্ট করার জন্য এখনই উদ্যোগ নিন। যারা বিদেশে রয়েছেন তারা বিদেশে অবস্থিত বাংলাদেশের প্রত্যেকটি দূতাবাসের মাধ্যমে মেশিন রিডেবল পাসপোর্ট করাতে পারবেন।</p>",
    },
];

export const relevent_works_data = [
    { image: RelevantWork1, link: "#register_name", text: "নাম নিবন্ধন" },
    { image: RelevantWork2, link: "#create_nid_birthcertificate", text: "নাগরিক ও জন্মসনদ তৈরি" },
    { image: RelevantWork3, link: "#get_certificate", text: "নাগরিক সনদপত্র পেতে করণীয়" },
    { image: RelevantWork4, link: "#get_birthCertificate", text: "জন্ম সনদপত্র পেতে করণীয়" },
    { image: RelevantWork5, link: "#make_passport", text: "পাসপোর্ট তৈরি" },
    { image: RelevantWork6, link: "#visaProcessing_check", text: "ভিসা সংগ্রহ ও যাচাই" },
    { image: RelevantWork7, link: "#job_agreement", text: "চাকরির চুক্তিপত্র" },
    { image: RelevantWork8, link: "#create_bankAccount", text: "ব্যাংক অ্যাকাউন্ট তৈরি" },
    { image: RelevantWork9, link: "#health_checking", text: "স্বাস্থ্য পরীক্ষা" },
    { image: RelevantWork10, link: "#bmit_briefing", text: "বিএমইটি'র ব্রিফিং" },
    { image: RelevantWork11, link: "#smartCard_clearanceCard", text: "স্মার্ট বা ইমিগ্রেশন ক্লিয়ারেন্স কার্ড" },
];
