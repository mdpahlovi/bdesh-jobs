import GooglePlayStore from "../../assets/google-play.svg";
import Question from "../../assets/icons/question.png";

const footer_data = [
    { category: "About Us", menus: ["About website", "Terms & Conditions", "Feedback"] },
    { category: "Job Seekers", menus: ["Create Account", "Career Counseling", "FAQ"] },
    { category: "Employers", menus: ["Create Account", "Products/Service", "Post a Job", "FAQ"] },
    { category: "Tools & Social Media", menus: ["Download Mobile App"] },
    { category: "Contact Us", menus: ["Have any job query ?"] },
];

const Footer = () => {
    return (
        <footer className="border-t-2 border-[#3F51B5] pt-14 pb-20 flex justify-between">
            {footer_data.map(({ category, menus }, index) => (
                <div key={index}>
                    <h3 className="mt-2 mb-7">{category}</h3>
                    <div className="space-y-3.5">
                        {menus.map((menu, index) => (
                            <p key={index}>{menu}</p>
                        ))}
                        {category === "Tools & Social Media" && <img src={GooglePlayStore} alt="" />}
                        {category === "Contact Us" && (
                            <div class="flex gap-2">
                                <div>
                                    <img src={Question} alt="" />
                                </div>
                                <div>
                                    <p class="-mt-0.5 text-sm font-bold">Call</p>
                                    <h2 className="-mt-1">16479</h2>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </footer>
    );
};

export default Footer;
