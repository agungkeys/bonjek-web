import React, { useState }from "react";
import Slider from "react-slick";
import Image from "next/image";

function Banners(props) {
  const { items } = props;

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: "center",
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 980,
        settings: {
          className: "single-center",
          slidesToShow: 1,
          centerMode: true,
          nextArrow: <></>,
          prevArrow: <></>,
        }
      },
      {
        breakpoint: 480,
        settings: {
          className: "single-center",
          slidesToShow: 1,
          centerMode: true,
          nextArrow: <></>,
          prevArrow: <></>,
        }
      }
    ]
  };

  return (
    <div className="banner-container">
      {items && 
        <Slider {...settings}>
          {items && items.map((banner, idx) => (
            <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <div className="img">
                <Image 
                  src={banner && banner.image.url} 
                  alt={banner.name} 
                  layout="responsive"
                  className="rounded-lg"
                  width={banner.image.width}
                  height={banner.image.height}
                  quality={100}
                  loading="lazy"
                  placeholder={() => <div style={{backgroundColor: 'grey'}} />}
                />
              </div>
            </div>
          ))}
        </Slider>
      }
    </div>
  );
}

export default Banners;
