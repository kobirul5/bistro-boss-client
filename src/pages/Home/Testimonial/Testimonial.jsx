import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-24">
            <SectionTitle title="testimonial" subTitle="What Our Clients Say"></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map((review, idx) =>
                        <SwiperSlide
                            key={idx}
                        >
                            <div className="mx-20 text-center flex flex-col justify-center items-center space-y-4">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                 <FaQuoteLeft className="text-5xl font-bold text-gray-900" />
                                <p></p>
                                <p>{review.details}</p>
                                <h3 className="text-xl font-bold text-orange-500">{review.name}</h3>

                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;