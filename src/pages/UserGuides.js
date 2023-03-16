import React from "react";
import DetailsBlog from "../components/UserGuides/DetailsBlog";
import Header from "../components/UserGuides/Header";
import SidePenal from "../components/UserGuides/SidePenal";

const Test = () => {
    return (
        <main>
            <Header title="বিদেশে যাওয়ার প্রাসঙ্গিক কাজ" />
            <div className="container grid grid-cols-[1fr_16.5rem] gap-8 my-8">
                <DetailsBlog />
                <SidePenal />
            </div>
        </main>
    );
};

export default Test;
