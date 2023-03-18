import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/logo.svg";
import JointVenture from "../../assets/logos/Joint_venture.png";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { IoMenu } from "react-icons/io5";
import { Menu, TopMenu } from "./Menu";
import Facebook from "../../assets/icons/facebook.png";
import Youtube from "../../assets/icons/youtube.png";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-background-sec top-0 z-20 border-b border-base-content/10">
            <div className="container h-[58px] flex justify-between items-center">
                <div className="flex lg:hidden items-center space-x-5">
                    <IoMenu size={28} onClick={() => setOpen(true)} />
                </div>
                <Link to="/" className="w-full lg:w-auto flex justify-center">
                    <img className="w-[170px]" src={Logo} alt="" />
                </Link>
                <img src={JointVenture} alt="" className="hidden lg:block" />
                <div className="hidden lg:flex flex-row items-center gap-4">
                    <Menu />
                </div>
            </div>
            {/* Mobile Menu */}
            <div
                className={`z-10 fixed w-full h-full top-0 bg-background-sec transition-all duration-500 ${
                    open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                } lg:hidden`}
            >
                <div className=" p-4 flex justify-between items-center">
                    <HiOutlineArrowSmallLeft size={28} onClick={() => setOpen(false)} />
                    <div className="flex justify-between items-center gap-4">
                        <img src={Facebook} alt="" className="w-6 h-6" />
                        <img src={Youtube} alt="" className="w-6 h-6" />
                    </div>
                </div>
                <div className="p-6 pb-10 space-y-4">
                    <Menu />
                </div>
                <hr />
                <div className="px-6 py-10 space-y-4">
                    <TopMenu />
                </div>
                <hr />
                <img src={JointVenture} alt="" className="py-10 mx-auto" />
            </div>
        </nav>
    );
};

export default Navbar;
