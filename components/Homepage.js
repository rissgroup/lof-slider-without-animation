import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel, } from "swiper";
import Navbar from "../components/Navs/Navbar"
import Footer from "./Navs/Footer";
import Bec from "./Bec";
import Bec2 from "./Bec2";
import Faq from "./Faq";
import Whylof from "./Whylof";
import Hero from "./Hero";
import Lofplatform from "./Lofplatform";
import Lofplmobile from "./Lofplmobile";


export default function Homepage() {
  return (
    <>
     <Navbar/>
      <Swiper
        style={{
          height: "100vh",
        }}
      
        speed={1200}
        
        modules={[ Mousewheel  ]}
        className="mySwiper main-sloider faq-sw"
        mousewheel={true}
        autoplay={false}
        >
       
        <SwiperSlide >
         <Hero/>
        </SwiperSlide>
        <SwiperSlide >
   <Lofplatform/>
   <Lofplmobile/>
        </SwiperSlide>
        {/* <SwiperSlide  >
         <Bec/>
        </SwiperSlide> */}
        <SwiperSlide >
         <Bec2/>
        </SwiperSlide>
        <SwiperSlide >
         <Whylof/>
        </SwiperSlide>
        
        <SwiperSlide >
         <Faq/>
        </SwiperSlide>
      </Swiper>
      <Footer/>
    </>
  );
}
