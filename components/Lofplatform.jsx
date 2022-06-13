import Head from "next/head";
import React, { useState } from "react";
import { Navigation, Pagination, Mousewheel } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Lofplatform() {
  const ImageOneClick = () => {
    SetImageText(
      " Create a free account and start browsing content from the hottest models around the world.  We have made everything extremely simple and there are no hidden terms."
    );
  };
  const ImageTwoClick = () => {
    SetImageText(
      " LOF Platform offers more features than any other fan site. Interact with your favorite content creators like never before. "
    );
  };
  const ImageThreeClick = () => {
    SetImageText(
      "Become a content creator?  Want to earn by selling your content? At LOF Platform you will keep up to 95% of all your sales. Release your content free of judgement and completely at your own terms. "
    );
  };
  const ImageFourClick = () => {
    SetImageText(
      " View pictures, videos, live streams - or privately message the models. You'll be able to connect with your favorite content creators. "
    );
  };
  const ImageFiveClick = () => {
    SetImageText(
      "Effortless and secure payments. Support your favorite content creator and buy their exclusive content.You can pay using money or crypto. "
    );
  };
  const [ImageText, SetImageText] = useState(
    "Become a content creator? Want to earn by selling your content? At LOF Platform you will keep up to 95% of all your sales. Release your content free of judgement and completely at your own terms."
  );

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
      </Head>
      <div className="bg-dark hidden md:block Lof-platform " id="lofplatfrom">
        <div className="container-fluid ">
          <div className=" text-white pt-48 md:pt-32 lg:pt-32 w-full mbl-resp-plat">
            <div className="col  text-center">
              <h1 className="text-3xl monofont leading-8 -m-5">
                LOF <span className="pink-color">platform</span>
              </h1>
              <p className="text-[12px] md:text-sm 2xl:text-[18px] hidden md:block tracking-normal leading-6 mx-auto txt-hide  w-12/12 md:w-[60%] lg:w-[37%] xl:w-[50%] 2xl:w-[47%] pt-8 font-light ">
                {ImageText}
              </p>
            </div>
          </div>

          {/* ******************* desktop Slider Start*********** */}

          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            centeredSlides={true}
            slideToClickedSlide

            
            loop
            modules={[Pagination, Navigation, Mousewheel]}
            className="mySwiper pl-swiper swiper-full-mobile  "
          >
            <SwiperSlide className="pl-slide">
              <img
                src="/assets/pl-slider/Login.svg"
                className="w-[220px] img-res "
                onClick={ImageOneClick}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="pl-slide">
              <img
                src="/assets/pl-slider/profile.svg"
                className="w-[220px] img-res"
                onClick={ImageTwoClick}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="pl-slide">
              <img
                src="/assets/pl-slider/stream.svg"
                onClick={ImageThreeClick}
                alt=""
                className="img-res"
              />
            </SwiperSlide>
            <SwiperSlide className="pl-slide">
              <img
              className="img-res"
                src="/assets/pl-slider/dropdown.svg"
                onClick={ImageFourClick}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="pl-slide">
              <img
                src="/assets/pl-slider/message.svg"
                className="w-[220px] img-res"
                onClick={ImageFiveClick}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          {/* *******************desktop  Slider End*********** */}
         
        </div>
      </div>
    </>
  );
}
