import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Link } from 'react-router-dom';

import "swiper/css";
import "swiper/css/effect-creative";

import banner1 from "../Images/banner-thiet-ke-noi-that-lendecor-jpg.png";
import banner2 from "../Images/11-2.png";
import banner1mobile from "../Images/banner-home-lendecor-mobi1_1-910.png";
import banner2mobile from "../Images/banner-home-lendecor-mobi2.jpg";

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 549px)" });

  const slides = isMobile
    ? [
        { id: 1, image: banner1mobile },
        { id: 2, image: banner2mobile },
      ]
    : [
        { id: 1, image: banner1 },
        { id: 2, image: banner2 },
      ];

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="relative w-full overflow-hidden cursor-grab">
      <Swiper
        modules={[Autoplay]}
        effect="creative"
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="banner bg-cover bg-[95%_35%]"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 bg-black/0 md:bg-black/30 lg:bg-black/30 xl:bg-black/30  pointer-events-none z-9"></div>

      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 z-10 flex flex-col items-start justify-end text-white 
                  px-[20px] py-[55px] md:px-[50px] md:py-[50px] lg:px-[9px] lg:py-[110px] xl:px-[148px] xl:py-[178px]"
        style={{ pointerEvents: "none" }}
      >
        <h1 className="leading-10 lg:mb-2 text-[19px] lg:text-2xl uppercase font-lora font-[400]">
          Đơn Vị Thiết Kế Và Thi Công Trọn Gói
        </h1>
        <Link to="/lien-he" style={{ pointerEvents: "auto" }}>
          <button className="mt-8 px-10 py-2 lg:text-xl bg-black hover:bg-white hover:text-black transition-all font-lora font-[400]">
            LIÊN HỆ
          </button>
        </Link>
      </motion.div>

      <div className="absolute z-10 bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 lg:w-3 lg:h-3 xg:w-3 xg:h-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>

    </section>
  );
};

export default Hero;
