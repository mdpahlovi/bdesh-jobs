import { HiHome } from "react-icons/hi2";
import { MdDoubleArrow } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const nav_link = ({ isActive }) => (isActive ? "flex items-center gap-1 text-secondary" : "flex items-center gap-1 hover:text-secondary");

const Menu = () => {
    return (
        <>
            <NavLink to="/" className={nav_link} end>
                <HiHome size={24} /> Home
            </NavLink>
            <NavLink to="/guides" className={nav_link}>
                <GiNotebook size={24} /> User Guides
            </NavLink>
        </>
    );
};

const TopMenu = ({ last }) => {
    return (
        <>
            <NavLink to="/bd-jobs" className={nav_link}>
                BD Jobs
            </NavLink>
            <NavLink to="/jobs" className={nav_link}>
                Jobs
            </NavLink>
            <NavLink to="/sob-seeker-account" className={nav_link}>
                Job Seeker Account
            </NavLink>
            <NavLink to="/recruitment-agency" className={nav_link}>
                <span className={`flex items-center gap-1 ${last ? "px-4 h-10 bg-edge" : ""}`}>
                    Recruitment Agency / Foreign Employers
                    <MdDoubleArrow size={20} />
                </span>
            </NavLink>
        </>
    );
};

export { Menu, TopMenu };
