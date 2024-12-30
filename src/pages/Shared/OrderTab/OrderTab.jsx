import FoodCard from "../FoodCard.jsx/FoodCard";

const OrderTab = ({items}) => {
    return (
        <div className='px-4 mt-5 mb-24 md:px-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {

                items.map((food, idx) => <FoodCard
                    key={idx}
                    food={food}
                ></FoodCard>)
            }

        </div>
    );
};

export default OrderTab;