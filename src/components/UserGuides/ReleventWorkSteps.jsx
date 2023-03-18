import { relevent_works_data } from "./Data";

const ReleventWorkSteps = () => {
    return (
        <>
            <div className="flex justify-between ">
                {relevent_works_data.slice(0, 6).map(({ image, text, link }, index) => (
                    <div key={index} className="relative pb-10 min-w-[10rem] z-[1]">
                        <div
                            className={`relative flex justify-center w-full after:content-[''] after:absolute after:top-1/2 ${
                                index === 0 ? "after:left-1/2" : ""
                            } after:w-full after:h-[1px] after:border-b after:border-black after:inline-block after:-z-[1]`}
                        >
                            <img src={image} alt="" />
                        </div>
                        <div className="text-center mx-4">
                            <p className="mt-1">{index + 1}</p>
                            <a href={link} className="text-sm">
                                {text}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-row-reverse justify-between">
                {relevent_works_data.slice(6, relevent_works_data.length).map(({ image, text, link }, index) => (
                    <div key={index} className="relative pb-10 min-w-[10rem] z-[1]">
                        <div
                            className={`relative flex justify-center w-full after:content-[''] after:absolute after:top-1/2 ${
                                index === relevent_works_data.length - 7 ? "after:left-1/2" : ""
                            } after:w-full after:h-[1px] after:border-b after:border-black after:inline-block after:-z-[1]`}
                        >
                            <img src={image} alt="" />
                        </div>
                        <div className="text-center mx-4">
                            <p className="mt-1">{index + 7}</p>
                            <a href={link} className="text-sm">
                                {text}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ReleventWorkSteps;
