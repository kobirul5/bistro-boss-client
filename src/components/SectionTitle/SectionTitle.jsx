
const SectionTitle = ({title, subTitle}) => {
    return (
        <div className="mx-auto md:w-5/12 text-center mb-10">
            <p className="text-yellow-600 ">---{subTitle}---</p>
            <div className="border border-y-2 my-4"></div>
            <h1 className=" uppercase text-4xl">{title}</h1>
            <div className="border border-y-2 my-4"></div>
        </div>
    );
};

export default SectionTitle;