import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Carousel = (props) => {
    let [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCurrentIndex((currentIndex + 1 % props.image.length))
        }, 8000)

        let index = 100 * ((currentIndex) % props.image.length);
        document.getElementById("imageContainer").style.transform = `translateX(-${index}vw)`;

        return () => clearTimeout(timer)
    }, [currentIndex])

    return <div className="CarouselContainer">
        <div id="imageContainer" className="imageContainer">
            {props.image.map((content) => {
                return <img id="CarouselImage" src={content} className="CarouselImage" />
            })}
        </div>
    </div>
};

Carousel.propTypes = {
    image: PropTypes.array
}

export default Carousel;