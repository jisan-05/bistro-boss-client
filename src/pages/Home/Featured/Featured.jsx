import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item text-white bg-fixed ">
            <div className="bg-gray-700/50 pt-8 my-20 ">
            <SectionTitle
                heading="Featured Item"
                subHeading="Check it out"
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img className="opacity-100" src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem eligendi explicabo labore? Temporibus
                        necessitatibus dignissimos laborum natus repellendus
                        officia sint voluptatum nostrum inventore enim. Maxime
                        aliquid excepturi alias neque ex!
                    </p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;
