import { Helmet } from "react-helmet-async";
import MenuImage from "../../assets/menu/banner3.jpg"
import Cover from "../Shared/Cover/Cover";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import PopularMenu from "../Home/PopularMenu/PopularMenu";

const Menu = () => {
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
            <section className="mt-24">

                <PopularMenu></PopularMenu>
            </section>
            <Cover
                image={MenuImage}
                title="OUR MENU"
                subTitle="Would you like to try a dish?"
            ></Cover>
            <section className="mt-24">

                <PopularMenu></PopularMenu>
            </section>
            <Cover
                image={MenuImage}
                title="OUR MENU"
                subTitle="Would you like to try a dish?"
            ></Cover>
            <section className="mt-24">

                <PopularMenu></PopularMenu>
            </section>
            <Cover
                image={MenuImage}
                title="OUR MENU"
                subTitle="Would you like to try a dish?"
            ></Cover>
            <section className="mt-24">

                <PopularMenu></PopularMenu>
            </section>
        </div>
    );
};

export default Menu;