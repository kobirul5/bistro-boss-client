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
        </div>
    );
};

export default CategoryMenu;