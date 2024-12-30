
const FoodCard = ({food}) => {
    const { _id, name, recipe, image, category, price} = food
    
    return (
        <div className=" relative card rounded-none  shadow-xl">
            <figure className='relative'>
                <img
                    src={image}
                    alt={name}
                    className="w-full h-56 object-cover"
                />
            </figure>
            <p className=" absolute top-5 right-5 text-white px-5 py-2 bg-[#111827] ">{price}</p>
            <div className="card-body items-center">
                <h2 className="card-title text-lg text-center font-bold">{name}</h2>
                <p className="text-sm text-gray-600">{recipe}
                </p>
                <div className="card-actions justify-center">
                <button className="btn btn-outline border-0 border-b-4 text-[#BB8506] hover:text-[#BB8506] 4 border-b-[#BB8506] hover:border-b-[#BB8506] hover:bottom-0 text-xl">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;