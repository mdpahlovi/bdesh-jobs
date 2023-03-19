import { relevent_works_data } from "./Data";
import ReleventWorkCard from "./ReleventWorkCard";

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
