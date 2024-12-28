import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import BannerImage1 from '../../../assets/home/01.jpg'
import BannerImage2 from '../../../assets/home/02.jpg'
import BannerImage3 from '../../../assets/home/03.png'
import BannerImage4 from '../../../assets/home/04.jpg'
import BannerImage5 from '../../../assets/home/05.png'
import BannerImage6 from '../../../assets/home/06.png'
const Banner = () => {
    return (
        <Carousel>
        <div>
            <img src={BannerImage1} />
        </div>
        <div>
            <img src={BannerImage2} />
            
        </div>
        <div>
            <img src={BannerImage3} />
            
        </div>
        <div>
            <img src={BannerImage4} />
            
        </div>
        <div>
            <img src={BannerImage5} />
            
        </div>
        <div>
            <img src={BannerImage6} />
            
        </div>
        
    </Carousel>
    );
};

export default Banner;