import React from "react";
import CountryVacancy from "../components/Home/Hero/CountryVacancy";
import FindDreamJob from "../components/Home/Hero/FindDreamJob";

const Home = () => {
    return (
        <div className="container grid grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] gap-6">
            <FindDreamJob />
            <div className="col-span-full lg:col-auto"></div>
            <CountryVacancy />
        </div>
    );
};

export default Home;
