import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Featured.css'
import FeaturedImage from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="featured-item pt-10">
            <SectionTitle
                subTitle="Check It Out"
                title="Featured Item"
            ></SectionTitle>
            <div className="md:flex justify-center items-center gap-10 pb-36 pt-12 px-[200px]">
                
                <div>
                    <img src={FeaturedImage} alt="" />
                </div>
                <div className="text-white">
                    <p>March 20, 2023</p>
                    <h3 className="text-xl">WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-white text-white border-2 border-t-0 border-x-0 ">Default</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;