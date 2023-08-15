"use client";

import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";

const Slic_card = ({ lastproduc }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    
    autoplaySpeed: 1000,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    
    <Slider {...settings} className="sl">
      {lastproduc.map((item) => (
          item && item.title ? (
            <div key={item.id} className="card_category2">
              <Image className="img" width={200} height={400} src={item.image.url} alt="Image" />
              {/* <Link href={`/last-products/${lastproduc._id}`} style={{padding: "12px"}}>{item.title}</Link> */}
            </div>
          ) : null
        ))}
    </Slider>
    
  );
};

export default Slic_card;
