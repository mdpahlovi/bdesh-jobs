import { stats_data } from "./Datas";

const Stats = () => {
    return (
        <div className="bg-background-sec flex justify-evenly gap-6 px-6 sm:px-0">
            {stats_data.map(({ color, title, number, icon }, index) => (
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
