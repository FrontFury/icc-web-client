import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img01 from '../../../assets/Home-Banner/Banner1.gif'
import img02 from '../../../assets/Home-Banner/Banner2.gif'
import img04 from '../../../assets/Home-Banner/Banner4.jpg'
import img05 from '../../../assets/Home-Banner//Banner5.png'
import img06 from '../../../assets/Home-Banner/Banner6.jpg'
import img07 from '../../../assets/Home-Banner/Banner7.png'

const Banner = () => {
    return (
        <div className="mb-7 w-11/12 mx-auto">
            <Carousel>
                <div>
                    <img className="rounded-xl max-h-[800px]" src={img01} />
                </div>
                <div>
                    <img className="rounded-xl max-h-[800px]" src={img02} />
                </div>
                <div>
                    <img className="rounded-xl max-h-[800px]" src={img04} />
                </div>
                <div>
                    <img className="rounded-xl max-h-[800px]" src={img05} />
                </div>
                <div>
                    <img className="rounded-xl max-h-[800px]" src={img06} />
                </div>
                <div>
                    <img className="rounded-xl max-h-[800px]" src={img07} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;