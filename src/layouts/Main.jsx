import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

export default function Main() {
    return (
        <>
            <Topbar />
            <Navbar />
            <div className="bg-background h-screen">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}
