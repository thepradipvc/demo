"use client";
import React from "react";
import Slider from "react-slick";
import Slide1 from "../../assets/carousel/slide1.png";
import Slide2 from "../../assets/carousel/slide2.png";
import Slide3 from "../../assets/carousel/slide3.png";
import Slide4 from "../../assets/carousel/slide4.png";
import Slide5 from "../../assets/carousel/slide5.png";
import Slide6 from "../../assets/carousel/slide6.png";
import Image from "next/image";

function index() {
  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    showArrows: false,
    // autoplay: true,
    speed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
      </>

      <div className="mb-28 flex flex-col gap-5">
        <div className="text-center my-8">
          <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight mb-4">
            Customize your social appearance
          </h2>
          <p className="text-lg">Wide range of templates to choose from</p>
        </div>

        <div className="w-full">
          <Slider {...settings}>
            {slides?.map((item, index) => (
              <div className="flex items-center justify-center w-max">
                <Image
                  src={item}
                  alt={`Slide ${index}`}
                  width="240"
                  height="500"
                  key={index}
                />
              </div>
            ))}
          </Slider>
        </div>

        <button className="btn btn-primary mt-8 m-auto bg-black text-white py-4 px-6 rounded-xl font-bold">
          Create Profile Now
        </button>
      </div>
    </>
  );
}

export default index;
