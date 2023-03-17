import { guides_blog_data, relevent_works_data } from "./Data";

const DetailsBlog = () => {
    return (
        <main className="w-full box p-8">
            <div>
                <h3>বিদেশে যাওয়ার প্রাসঙ্গিক কাজ</h3>
                <p className="text-sm mt-2.5">
                    মানসিক প্রস্তুতির পরের ধাপেই হল বিদেশে যাওয়ার জন্য করনীয় কাজ সমূহ ঠিক করা। বিদেশে চাকরির জন্য যেতে প্রথমেই, একজন চাকরিপ্রার্থীকে করতে হবে
                    নাম নিবন্ধন এবং নাগরিক সনদপত্র ও জন্ম সনদপত্র তৈরি কাজ। পাসপোর্ট তৈরির সময় জন্ম সনদ প্রয়োজন হবে, তাই আগেই জন্ম সনদ পেতে করনীয় কাজ গুলো শেষ
                    করতে হবে। নাগরিক সনদপত্র ও জন্ম সনদ হাতে পেলেই পাসপোর্ট তৈরি করে ভিসা সংগ্রহ ও যাচাই করতে হবে। ভিসার কাজ শেষে সংগ্রহ করতে হবে চাকরির
                    চুক্তিপত্র এবং তৈরি করতে হবে একটি ব্যাংক অ্যাকাউন্ট। এবার স্বাস্থ্য পরীক্ষা করে, বিএমইটির ব্রিফিং-এ অংশ নিয়ে স্মার্ট কার্ড বা ইমিগ্রেশন
                    ক্লিয়ারেন্স কার্ড সংগ্রহ করলেই কর্মজীবি হয়ে বিদেশ যাওয়ার মূল কাজ গুলো সম্পন্ন হবে।
                </p>

                <div className="mt-10 flex flex-wrap justify-between w-[54rem] overflow-x-auto">
                    {relevent_works_data.map(({ image, text, link }, index) => (
                        <div className="px-4 pb-10 text-center flex flex-col items-center max-w-[10rem]">
                            <div className="work-icon">
                                <img src={image} alt="" />
                            </div>
                            <p className="mt-1">{index + 1}</p>
                            <a href={link} className="text-sm">
                                {text}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <hr className="my-8" />
            {guides_blog_data.map(({ image, title, details, note }, index) => (
                <>
                    <div key={index}>
                        <img
                            src={image}
                            alt=""
                            className={`w-[258px] h-[150px] mb-6 lg:mb-2.5 ${(index + 1) % 2 === 0 ? "lg:float-right lg:ml-7" : "lg:float-left lg:mr-7"}`}
                        />
                        <div>
                            <div className="font-bold mb-4 flex items-center gap-2.5">
                                <div className="w-8 h-8 bg-content text-background-sec flex items-center justify-center">0{index + 1}</div>
                                {title}
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: details }} className="[&>*]:text-sm space-y-2.5" />
                        </div>
                        {note && <p className="mt-5 p-5 bg-[#fff4d4] rounded-lg text-sm">{note}</p>}
                    </div>
                    <hr className={`my-8 ${index + 1 === guides_blog_data.length && "hidden"}`} />
                </>
            ))}
        </main>
    );
};

export default DetailsBlog;
