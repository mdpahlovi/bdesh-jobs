import { IoBriefcase } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";
import { SiGooglemaps } from "react-icons/si";

const FindDreamJob = () => {
    return (
        <div className="row-start-2 lg:row-auto mb-7 mt-6 sm:mt-7 space-y-4">
            <h2 className="mb-5">Find your dream job</h2>
            <div className="flex flex-col">
                <label className="flex items-center gap-2 mb-1.5">
                    <IoBriefcase />
                    Write your occupation
                </label>
                <input type="text" placeholder="Driver, Electrician etc" />
            </div>
            <div className="flex flex-col">
                <label className="flex items-center gap-2 mb-1.5">
                    <GiWorld />
                    Skilled Category
                </label>
                <select>
                    <option value="">Select Skill</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label className="flex items-center gap-2 mb-1.5">
                    <SiGooglemaps />
                    Country
                </label>
                <select>
                    <option value="">Select Country</option>
                </select>
            </div>
            <button className="bg-[#FBC02D]">Search</button>
        </div>
    );
};

export default FindDreamJob;
