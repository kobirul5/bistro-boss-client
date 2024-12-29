import { Parallax, Background } from 'react-parallax';
const Cover = ({ image, title, subTitle }) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={image}
        bgImageAlt="the dog"
        strength={-200}
    >
            <div
                className="hero h-[500px] py-28 px-28">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{subTitle}</p>
                    </div>
                </div>
            </div>
            </Parallax>


    );
};

export default Cover;