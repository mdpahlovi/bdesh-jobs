import { Outlet } from "react-router-dom";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";
import Topbar from "../components/Layouts/Topbar";

export default function Main() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
