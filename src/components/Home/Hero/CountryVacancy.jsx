import SubmitBiodata from "../../../assets/icons/submit_biodata.png";
import LogoOfBdeshjaatra from "../../../assets/logo-of-bdeshjaatra.svg";
import { jobs_in_country } from "../Datas";

const CountryVacancy = () => {
    return (
        <div className="mb-7 -mt-1 sm:mt-7">
            <h2 className="mb-5">Country wise vacancies</h2>
            <div className="space-y-1.5">
                {jobs_in_country.slice(0, 6).map(({ country, vacancy }, index) => (
                    <div key={index}>{`${country} (${vacancy})`}</div>
                ))}
                <div>All Countries</div>
                <div className="w-44 flex justify-center items-center bg-[#FFDC79] rounded-lg gap-2 px-4 py-2.5">
                    <div>
                        <img src={SubmitBiodata} alt="" />
                    </div>
                    <span className="text-sm text-content font-bold">Submit your Biodata</span>
                </div>
                <div className="w-44 flex flex-col justify-center items-center bg-background-sec rounded-lg px-4 py-2.5">
                    <div>
                        <img src={LogoOfBdeshjaatra} alt="" />
                    </div>
                    <span className="text-sm text-secondary">অভিবাসন বিষয়ক তথ্য</span>
                </div>
            </div>
        </div>
    );
};

export default CountryVacancy;
