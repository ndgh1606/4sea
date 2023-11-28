import React from "react";
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import './Residentcies.css'
import data from '../../utils/slider.json'
const Residentcies = () => {
    return (
        <section className="r-warpper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                <span className="orangeText">Services</span>
                <span className="primaryText">Popular Services</span>
                </div>
            </div>
        </section>
    )
}

export default Residentcies