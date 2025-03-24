import React from "react";

const FoodCard = ({ item }) => {
    const { image, price, recipe, name } = item;

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img src={image} alt="Shoes" />
            </figure>
            <p className="bg-slate-900 text-white absolute right-0 mt-4 mr-2 px-2">
                ${price}
            </p>
            <div className="card-body">
                <h2 className="card-title mx-auto">{name}</h2>
                <p className="">{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline border-0 border-b-4 border-yellow-300 mx-auto bg-gray-200 hover:bg-gray-700 hover:border-black hover:text-white">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
