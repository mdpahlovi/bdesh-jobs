import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";

const TabPanel = ({ array, isLess, setIsLess }) => {
    const [width, setWidth] = useState(window.innerWidth);

    // Set isLess for Different Screen
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        if (width <= 1024) {
            setIsLess(false);
        } else {
            setIsLess(true);
        }
        return () => {
            window.removeEventListener("resize", () => setWidth(window.innerWidth));
        };
    }, [setIsLess, width]);

    return (
        <Tab.Panel className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
            {array.slice(0, isLess ? array.length : 6).map(({ image, text }, i) => (
                <div key={i} className="box flex items-center gap-2">
                    <img src={image} alt="" />
                    <h5 className="font-medium">{text}</h5>
                </div>
            ))}
        </Tab.Panel>
    );
};

export default TabPanel;
