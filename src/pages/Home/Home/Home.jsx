import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefReco from "../ChefReco/ChefReco";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div >
            <Helmet>
                <title>Home || Bistro Boss</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <ChefReco></ChefReco>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;