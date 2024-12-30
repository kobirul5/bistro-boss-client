import { Link } from "react-router-dom";
import PopularCard from "../../../components/PopulerCard/PopularCard";
import Cover from "../../Shared/Cover/Cover";

const CategoryMenu = ({ item, title, coverImg }) => {
    return (
        <div className="mb-24 mt-14">
            {title && <Cover title={title} image={coverImg}></Cover>}
            <div className="grid grid-cols-2 gap-5 mt-10 px-4">
                {
                    item.map((item, idx) => <PopularCard
                        key={idx}
                        item={item}
                    ></PopularCard>)
                }
            </div>
            <div className="flex justify-center items-center ">
                <Link to={`/order/${title}`} className="mx-auto mt-5  btn btn-outline border-0 border-b-4  text-[#BB8506] hover:text-[#BB8506] 4 border-b-[#BB8506] hover:border-b-[#BB8506] hover:bottom-0 text-xl">Order Now</Link>

            </div>
        </div>
    );
};

export default CategoryMenu;