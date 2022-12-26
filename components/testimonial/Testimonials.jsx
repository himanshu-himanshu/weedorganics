import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./Testimonial";
import testi1 from "../../public/runwaypot.jpeg";
import testi2 from "../../public/testi2.png";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 4500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full h-full bg-secondary py-12 md:py-18 lg:py-20">
      <div className="container max-w-6xl mx-auto px-8 lg:px-0">
        <div className="w-full flex flex-col justify-center items-center py-6 md:py-8 lg:py-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-Raleway font-bold text-primary text-center underline--magical tracking-wide">
            Testimonials
          </h1>
        </div>
        <div className="py-12">
          <Slider {...settings}>
            <div>
              <Testimonial
                src={testi1}
                name="Daniel"
                title="Manager, Runway Pot"
                text="This is a great platform that separates our organic products from the rest. With our online and in store organic menu,  customers now have a better way of finding and connecting with their organic cannabis product helping us increase in store foot traffic."
              />
            </div>
            <div>
              <Testimonial
                src={testi2}
                name="Tom"
                title="Manager, 420Gizmo"
                text="Organic is a lifestyle, so we listed our online accessory store on
        WeedOrganic to showcase our customers organic products like rolling
        paper, hemp wick and more"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
