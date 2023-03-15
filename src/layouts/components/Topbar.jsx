import { TopMenu } from "./Menu";
import Facebook from "../../assets/icons/facebook.png";
import Youtube from "../../assets/icons/youtube.png";

const Topbar = () => {
    return (
        <div className="hidden lg:flex h-10 bg-background justify-between items-center">
            <div className="flex justify-between items-center gap-8">
                <TopMenu last />
            </div>
            <div className="flex justify-between items-center gap-4">
                <img src={Facebook} alt="" className="w-6 h-6" />
                <img src={Youtube} alt="" className="w-6 h-6" />
            </div>
        </div>
    );
};

export default Topbar;
