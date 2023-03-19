const ReleventWorkCard = ({ top, condition, index, data }) => {
    const { image, text, link } = data;
    return (
        <div className="relative pb-10 w-full z-[1]">
            <div
                className={`relative flex justify-center w-full after:content-[''] after:absolute after:top-1/2 ${
                    condition ? "after:left-1/2" : ""
                } after:w-full after:h-[1px] after:border-b after:border-black after:inline-block after:-z-[1]`}
            >
                <img src={image} alt="" />
            </div>
            <div className="text-center mx-4">
                <p className="mt-1">{top ? index + 1 : index + 7}</p>
                <a href={link} className="text-sm">
                    {text}
                </a>
            </div>
        </div>
    );
};

export default ReleventWorkCard;
