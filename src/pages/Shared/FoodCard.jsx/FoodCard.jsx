import React from 'react';

const FoodCard = ({food}) => {
    const { _id, name, recipe, image, category, price} = food
    return (
        <div className="card rounded-none  shadow-xl">
            <figure>
                <img
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover"
                />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title text-lg font-bold">{name}</h2>
                <p className="text-sm text-gray-600">{recipe}
                </p>
                <div className="card-actions justify-center">
                <button className="btn btn-outline border-0 border-b-4 text-[#BB8506] 4 border-b-[#BB8506]">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;