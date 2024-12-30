import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularCard from "../../../components/PopulerCard/PopularCard";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular= menu.filter(item=>item.category === "popular")

    // const [menu, setMenu] = useState([])
    // useEffect(()=>{
    //     fetch("menu.json")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems= data.filter(item=>item.category === "popular")
    //         setMenu(popularItems)
    //     })
    // },[])
    return (
        <section className="px-4 mb-24">
            <SectionTitle
                title="Check it outCheck it out"
                subTitle="Check it out"
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-5">
                {
                    popular.map((item,idx)=><PopularCard
                    key={idx}
                    item={item}
                    ></PopularCard>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;