import React from "react";
import CountryVacancy from "../components/Home/Hero/CountryVacancy";
import FindDreamJob from "../components/Home/Hero/FindDreamJob";
import Slider from "../components/Home/Hero/Slider";
import Stats from "../components/Home/Stats";

const Home = () => {
    return (
        <main>
            <header className="relative bg-hero bg-bottom bg-repeat-x z-[1] text-white">
                <div className="absolute w-full h-full inset-0 bg-primary/80 -z-[1]"></div>
                <div className="container grid grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] gap-6">
                    <FindDreamJob />
                    <Slider />
                    <CountryVacancy />
                </div>
            </header>
            <Stats />
        </main>
    );
};

export default Home;
