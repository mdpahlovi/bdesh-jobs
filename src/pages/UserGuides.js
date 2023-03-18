import React from "react";
import DetailsBlog from "../components/UserGuides/DetailsBlog";
import Header from "../components/UserGuides/Header";
import Body from "../layouts/Body";

const Test = () => {
    return (
        <main>
            <Header title="বিদেশে যাওয়ার প্রাসঙ্গিক কাজ" />
            <Body className="my-8">
                <DetailsBlog />
            </Body>
        </main>
    );
};

export default Test;
