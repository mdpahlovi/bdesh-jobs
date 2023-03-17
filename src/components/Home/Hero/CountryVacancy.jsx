import SubmitBiodata from "../../../assets/icons/submit_biodata.png";
import LogoOfBdeshjaatra from "../../../assets/logo-of-bdeshjaatra.svg";

const data = [
    { country: "Libya", vacancy: "700" },
    { country: "Saudi Arabia", vacancy: "222" },
    { country: "Kuwait", vacancy: "100" },
    { country: "Oman", vacancy: "100" },
    { country: "Turkey", vacancy: "71" },
    { country: "United Arab Emirates", vacancy: "47" },
];

const CountryVacancy = () => {
    return (
        <div className="my-7">
            <h2 className="mb-5">Country wise vacancies</h2>
            <div className="space-y-1.5">
                {data.map(({ country, vacancy }, index) => (
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
