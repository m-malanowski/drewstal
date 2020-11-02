import React from "react";
// import { window } from 'browser-monads';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import pictureResponsive from "../assets/imgs/domek-letniskowy-37.jpg";
import pictureResponsive2 from "../assets/imgs/domek-letniskowy-31.jpg";
import pictureResponsive3 from "../assets/imgs/domek-letniskowy-36.jpg";
import picture from "../assets/imgs/2x.jpg";
import picture2 from "../assets/imgs/3x.jpg";
import picture3 from "../assets/imgs/1x.jpg";

import {motion} from "framer-motion";
// if (typeof window !== 'undefined') {
//     console.log(`Location: ${window.location.href}`);
// }

const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]};

function getWindowWidth() {
    if (typeof window !== 'undefined') {
            let width = window.innerWidth
            return width
      }
}


function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{
                left: "11.5vw",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                left: "8.5vw",
            }}
            onClick={onClick}
        />
    );
}

const IndexHeaderCarousel = () => {


    const settings = {
        dots: true,
        arrows: true,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: 'ease-in-out',
        loop: true,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    dots: false,
                    arrows: false
                }
            },
        ],
        appendDots: dots => (
            <div
                style={{
                    marginBottom: "100px",
                    zIndex: "1000 !important",
                    position: "absolute !important",
                    borderRadius: "20px",
                    pauseOnHover: false,
                    left: "38vw",
                }}
            >
                <ul style={{margin: "0px"}}> {dots} </ul>
            </div>
        ),
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>

    };

    return (
        <div className="header-carousel">
            <Slider {...settings}>
                <motion.div className="header-carousel-image1"
                    initial={{opacity: 0, y: -40}}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {delay: .2, ...transition},
                    }}
                    exit={{
                        y: -140,
                        transition: {...transition},
                    }}
                >
                    <img src={  getWindowWidth() < 500 ? pictureResponsive : picture}

                    />
                </motion.div>
                <div>
                    <img src={  getWindowWidth()  < 500 ? pictureResponsive2 : picture2}

                    />
                </div>
                <div>
                    <img src={  getWindowWidth()  < 500 ? pictureResponsive3 : picture3}

                    />
                </div>
            </Slider>
        </div>
    );
}

export default IndexHeaderCarousel