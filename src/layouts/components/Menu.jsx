import { HiUserCircle } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";
import { MdDoubleArrow } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Menu = () => {
    const nav_link = `flex items-center gap-1 ${({ isActive }) => (isActive ? "" : "")}`;

    return (
        <>
            <NavLink to="/" className={nav_link} end>
                <HiUserCircle size={24} /> Sign in / Create Account
            </NavLink>
            <NavLink to="/category" className={nav_link}>
                <IoCall size={24} /> Contact Us
            </NavLink>
        </>
    );
};

const TopMenu = ({ last }) => {
    const nav_link = `flex items-center gap-1 ${({ isActive }) => (isActive ? "" : "")}`;

    return (
        <>
            <NavLink to="/" className={nav_link} end>
                BD Jobs
            </NavLink>
            <NavLink to="/" className={nav_link} end>
                Jobs
            </NavLink>
            <NavLink to="/" className={nav_link} end>
                Job Seeker Account
            </NavLink>
            <NavLink to="/" className={`${nav_link} ${last ? "px-4 h-10 bg-[#D4D8D9]" : ""}`} end>
                Recruitment Agency / Foreign Employers
                <MdDoubleArrow size={20} />
            </NavLink>
        </>
    );
};

export { Menu, TopMenu };
