import React from "react";
import { Navigation, Pagination, Mousewheel } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Head from "next/head";

export default function Lofplmobile() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
      </Head>
      <div className="bg-dark block md:hidden " >
        <div className="container-fluid ">
          <div className=" text-white pt-24  md:pt-56 lg:pt-32 w-full mbl-resp-plat">
            <div className="col  text-center ">
              <h1 className="text-3xl monofont leading-8 -m-5">
                LOF <span className="pink-color">platform</span>
              </h1>
            </div>
          </div>
          {/* *******************Mobile Slider Start*********** */}
          <div className=" slider-resp">
            <Swiper
              navigation
              slidesPerView={1}
            //   spaceBetween={30}
              mousewheel={true}
              centeredSlides
              slideToClickedSlide
              modules={[Pagination, Mousewheel, Navigation]}
              className="mySwiper pl-swiper  "
            >
              <SwiperSlide className="pl-slide flex-col">
                  <div className="h-32 txt-hide">

                  <p className="text-[12px] md:text-sm  tracking-normal leading-6 mx-auto  h-1/3 w-12/12 md:w-[60%] lg:w-[37%] xl:w-[50%] 2xl:w-[37%] pt-8 font-light ">
                  Create a free account and start browsing content from the
                  hottest models around the world. We have made everything
                  extremely simple and there are no hidden terms.
                </p>
                  </div>
                
                <img
                  src="/assets/pl-slider/m-login.png"
                  className="w-[220px] set-img  "
                  id="slide1"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="pl-slide flex-col">
                  <div className="h-32 txt-hide">

                  
                <p className="text-[12px] md:text-sm  tracking-normal leading-6 mx-auto  h-1/3 w-12/12 md:w-[60%] lg:w-[37%] xl:w-[50%] 2xl:w-[37%] pt-8 font-light ">
                  LOF Platform offers more features than any other fan site.
                  Interact with your favorite content creators <br />
                  like never before.
                </p>
                </div>
                <img
                  src="/assets/pl-slider/m-profile.png"
                  className="w-[220px] set-img"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="pl-slide flex-col ">
                  <div className="h-32 txt-hide">

                 
                <p className="text-[12px] md:text-sm  tracking-normal leading-6 mx-auto  h-1/3  w-12/12 md:w-[60%] lg:w-[37%] xl:w-[50%] 2xl:w-[37%] pt-8 font-light ">
                  Become a content creator? Want to earn by selling your
                  content? At LOF Platform you will keep up to 95% of all your
                  sales. Release your content free of judgement and completely
                  at your own terms.
                </p>
                </div>
                <img src="/assets/pl-slider/m-stream.png" className="set-img" alt="" />
              </SwiperSlide>
              <SwiperSlide className="pl-slide flex-col">
                  <div className="h-32 txt-hide">

                  
                <p className="text-[12px] md:text-sm  tracking-normal leading-6 mx-auto  h-1/3 w-12/12 md:w-[60%] lg:w-[37%] xl:w-[50%] 2xl:w-[37%] pt-8 font-light ">
                  View pictures, videos, live streams - or privately message the
                  models. You&apos;ll be able to connect with your favorite content
                  creators.
                </p>
                </div>
                <img src="/assets/pl-slider/m-drop-down.png" className="set-img" alt="" />
              </SwiperSlide>
              <SwiperSlide className="pl-slide flex-col">
                  <div className="h-32 txt-hide">

                  
                <p className="text-[12px] md:text-sm tracking-normal leading-6 mx-auto  h-1/3 w-12/12 md:w-[60%] lg:w-[37%] xl:w-[50%] 2xl:w-[37%] pt-8 font-light ">
                  Effortless and secure payments. Support your favorite content
                  creator and buy their exclusive content.You can pay using
                  money or crypto.
                </p>
                </div>
                <img src="/assets/pl-slider/m-message.png" className="set-img" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* ******************* Mobile Slider End*********** */}
        </div>
      </div>
    </>
  );
}
