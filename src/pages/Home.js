import React from "react";
import CallToAction from "../components/Home/CallToAction";
import CountryVacancy from "../components/Home/Hero/CountryVacancy";
import FindDreamJob from "../components/Home/Hero/FindDreamJob";
import Slider from "../components/Home/Hero/Slider";
import JobsInCountry from "../components/Home/JobsInCountry/JobsInCountry";
import Stats from "../components/Home/Stats";

const Home = () => {
    return (
        <main>
            <header className="relative bg-hero bg-bottom bg-repeat-x z-[1] text-white">
                <div className="bg-overly bg-primary/80"></div>
                <div className="container grid grid-cols-1 sm:grid-cols-[48%_52%] lg:grid-cols-[25%_50%_25%] sm:gap-6">
                    <FindDreamJob />
                    <Slider />
                    <CountryVacancy />
                </div>
            </header>
            <Stats />
            <JobsInCountry />
            <CallToAction />
        </main>
    );
};

export default Home;
