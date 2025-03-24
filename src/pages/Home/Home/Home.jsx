import { Helmet } from "react-helmet-async";
import PopularMenu from "../../PopularMenu/PopularMenu.jsx";
import Banner from "../Banner/Banner.jsx";
import Category from "../Category/Category.jsx";
import Featured from "../Featured/Featured.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
