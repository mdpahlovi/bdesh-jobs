import { HiUsers } from "react-icons/hi2";
import { ImWrench } from "react-icons/im";
import { GiWorld } from "react-icons/gi";

const data = [
    {
        color: "#F44336",
        title: "No. of vacancies",
        number: "1281",
        icon: <HiUsers size={30} />,
    },
    {
        color: "#4CAF50",
        title: "No. of jobs",
        number: "31",
        icon: <ImWrench size={30} />,
    },
    {
        color: "#FF9800",
        title: "No. of countries",
        number: "16",
        icon: <GiWorld size={30} />,
    },
];

const Stats = () => {
    return (
        <div className="bg-background-sec flex justify-evenly gap-6 px-6 sm:px-0">
            {data.map(({ color, title, number, icon }, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center gap-4 py-8">
                    <div className="w-16 h-16 rounded-full flex justify-center items-center text-white" style={{ backgroundColor: color }}>
                        {icon}
                    </div>
                    <div>
                        <h3 className="font-medium text-center">{title}</h3>
                        <h2 className="text-center md:text-left" style={{ color: color }}>
                            {number}
                        </h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Stats;
