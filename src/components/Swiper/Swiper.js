import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { swiper_data } from "../../static_data";

export default function App() {
  const getScreensize = () => {
    return window.screen.width;
  };
  return (
    <div className="w-full h-[95vh] bg-black">
      <Swiper
        className="w-full h-[100vh] pt-[50px] pb-[50px] rounded-xl"
        spaceBetween={30}
        slidesPerView={getScreensize() < 640 ? 1 : 3}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          grabCursor: "pointer",
        }}
        modules={[EffectCoverflow, Autoplay]}
      >
        {swiper_data.map((data) => (
          <SwiperSlide
            key={data.id}
            className=" bg-center bg-cover  rounded-xl"
          >
            <div className="absolute top-16 left-4 z-50 flex">
              <div className="w-20 h-20 flex items-center justify-center border border-white bg-black rounded-full">
                <div className="w-10 h-10 text-white text-4xl">{data.icon}</div>
              </div>
              <div className="pt-4 pl-5">
                <h1 className="text-black text-2xl font-medium">{data.p}</h1>
                <span>{data.span}</span>
              </div>
            </div>
            <img
              className="block w-full rounded-xl pt-[50px] relative"
              src={data.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
