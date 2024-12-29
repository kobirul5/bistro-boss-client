import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ChefRecoCard from './ChefRecoCard';

const ChefReco = () => {
    const [foods, setFoods] = useState([])
    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json( ))
        .then(data=>setFoods(data.slice(0,3)))
    },[])
    return (
        <section className='mb-24'>
            <SectionTitle
            subTitle="Should Try"
            title="CHEF RECOMMENDS"
            ></SectionTitle>

            <div className='px-4 md:px-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
                {
                    foods.map((food,idx)=><ChefRecoCard
                    key={idx}
                    food={food}
                    ></ChefRecoCard>)
                }
                
            </div>
            
        </section>
    );
};

export default ChefReco;