import React, { Component } from 'react';
import './style.scss';
import { imgSlider } from './data';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Slider extends Component {



    render() {
        return (
            <div className="slider-wrap">
                <Carousel>

                    {imgSlider.map(({ id, imageUrl }) => {
                        return (
                            <div
                                className="slider-item"
                                key={id}>
                                <img src={imageUrl} alt="" />


                            </div>
                        )
                    })}

                </Carousel>


            </div>
        )
    }
}

export default Slider;