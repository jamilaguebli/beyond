import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

// ⚠️ IMPORTANT : CSS slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, // 3 secondes
    speed: 800,          // animation fluide
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,       // optionnel
  };

  const slideData = [
    {
      id: 1,
      img: "dubai.png",
    },
     {
      id: 2,
      img: "https://kanebridgenewsme.com/application/assets/2024/04/city_skyscraper_building_dubai_night_road_yacht_hd_travel.jpg",
    },
    {
      id: 3,
      img: "https://www.shutterstock.com/image-photo/dubai-cityscape-modern-metro-railway-600nw-2414539851.jpg",
    },
   
    {
      id: 4,
      img: "https://www.ews-limited.com/wp-content/uploads/2021/05/dubai2.jpg",
    },
     {
      id: 5,
      img: "https://cdn.dubaiimmobilier.fr/wp-content/uploads/2017/05/dubai-fountaine.jpg",
    },
     {
      id: 6,
      img: "https://c4.wallpaperflare.com/wallpaper/942/642/372/metropolitan-area-city-cityscape-urban-area-wallpaper-preview.jpg",
    },
  ];

  return (
    <section id="home">
    <div className="w-full">
      <Slider {...settings}>
        {slideData.map((item) => (
          <Slide key={item.id} img={item.img} />
        ))}
      </Slider>
    </div>
</section>
  );
};

export default Hero;
