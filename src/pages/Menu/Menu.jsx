import { Helmet } from "react-helmet-async";
import MenuImage from "../../assets/menu/banner3.jpg"
import dessertImage from "../../assets/menu/dessert-bg.jpeg"
import pizzaImage from "../../assets/menu/pizza-bg.jpg"
import saladImage from "../../assets/menu/salad-bg.jpg"
import soupImage from "../../assets/menu/soup-bg.jpg"

import Cover from "../Shared/Cover/Cover";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CategoryMenu from "./CategoryMenu/CategoryMenu";
import useMenu from "../../hooks/useMenu";

const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === "offered")
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")

    return (
        <div>
            <Helmet>
                <title>Menu || Bistro Boss</title>
            </Helmet>
            <Cover
                image={MenuImage}
                title="OUR MENU"
                subTitle="Would you like to try a dish?"
            ></Cover>

            <SectionTitle
                title="TODAY'S OFFER"
                subTitle="Don't Miss"
            ></SectionTitle>

            <CategoryMenu
                item={offered}
            ></CategoryMenu>
            <CategoryMenu
                item={dessert}
                title={"Dessert"}
                coverImg={dessertImage}
            ></CategoryMenu>
            <CategoryMenu
                item={pizza}
                title={"Pizza"}
                coverImg={pizzaImage}
            ></CategoryMenu>
            <CategoryMenu
                item={salad}
                title={"Salad"}
                coverImg={saladImage}
            ></CategoryMenu>
            <CategoryMenu
                item={soup}
                title={"Soup"}
                coverImg={soupImage}
            ></CategoryMenu>

        </div>
    );
};

export default Menu;