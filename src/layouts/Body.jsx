import React from "react";
import SidePenal from "../components/Layouts/SidePenal";

const Body = ({ children, className }) => {
    return (
        <section className={`container flex flex-col md:flex-row gap-8 ${className}`}>
            {children}
            <SidePenal />
        </section>
    );
};

export default Body;
