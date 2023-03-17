import React from "react";

const Header = ({ title }) => {
    return (
        <header className="relative bg-header bg-center z-[1] text-white">
            <div className="bg-overly bg-primary/80"></div>
            <h2 className="container px-4 py-6 text-center">{title}</h2>
        </header>
    );
};

export default Header;
