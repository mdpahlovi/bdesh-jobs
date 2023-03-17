import { guides_blog_data } from "./Data";

const DetailsBlog = () => {
    return (
        <main className="w-full box p-8">
            {guides_blog_data.map(({ image, title, details }, index) => (
                <>
                    <div key={index}>
                        <img
                            src={image}
                            alt=""
                            className={`w-[258px] h-[150px] mb-6 lg:mb-2.5 ${(index + 1) % 2 === 0 ? "lg:float-right lg:ml-7" : "lg:float-left lg:mr-7"}`}
                        />
                        <div>
                            <div className="font-bold mb-4 flex items-center gap-2.5">
                                <div className="w-8 h-8 bg-content text-background-sec flex items-center justify-center ">0{index + 1}</div>
                                {title}
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: details }} className="[&>*]:text-sm space-y-2.5" />
                        </div>
                    </div>
                    <hr className={`my-8 ${index + 1 === guides_blog_data.length && "hidden"}`} />
                </>
            ))}
        </main>
    );
};

export default DetailsBlog;
