import { relevent_works_data } from "./Data";

const ReleventWorkCard = ({ top, condition, index, data }) => {
    const { image, text, link } = data;
    return (
        <div className="relative pb-10 w-full z-[1]">
            <div
                className={`relative flex justify-center w-full after:content-[''] after:absolute after:top-1/2 ${
                    condition ? "after:left-1/2" : ""
                } after:w-full after:h-[1px] after:border-b after:border-black after:inline-block after:-z-[1]`}
            >
                <img src={image} alt="" />
            </div>
            <div className="text-center mx-4">
                <p className="mt-1">{top ? index + 1 : index + 7}</p>
                <a href={link} className="text-sm">
                    {text}
                </a>
            </div>
        </div>
    );
};

const ReleventWorkSteps = () => {
    const top = relevent_works_data.slice(0, 6);
    const bottom = relevent_works_data.slice(6, relevent_works_data.length);

    return (
        <>
            <div className="relative flex justify-between min-w-[56rem] after:absolute after:content-[''] after:min-w-[56rem] after:h-full after:border-r after:border-black after:top-6">
                {top.map((data, i) => (
                    <ReleventWorkCard key={i} index={i} data={data} condition={i === 0} top />
                ))}
            </div>
            <div className="ml-16 flex flex-row-reverse justify-between min-w-[52rem]">
                {bottom.map((data, i) => (
                    <ReleventWorkCard key={i} index={i} data={data} condition={i === bottom.length - 1} />
                ))}
            </div>
        </>
    );
};

export default ReleventWorkSteps;
