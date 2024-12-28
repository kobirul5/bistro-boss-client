
const PopularCard = ({item}) => {
    const { _id, name, recipe, image, category, price} = item
    return (
        <div className="flex items-center space-x-4 py-4 border-b">

        <div className="">
            <img className="rounded-[200px] rounded-tl-none w-28 h-28 object-cover" src={image} alt="" />
        </div>

        <div className="flex-grow">
          <h3 className="text-lg font-semibold uppercase">
            Roast Duck Breast <span className="text-gray-400">--------------------</span>
          </h3>
          <p className="text-sm text-gray-500">
            Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce
          </p>
        </div>
  
        <div className="text-gold-500 font-bold text-lg">$14.5</div>
      </div>
    );
};

export default PopularCard;