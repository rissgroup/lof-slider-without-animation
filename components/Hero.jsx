import React from "react";

export default function Hero() {
  return (
    <>
      <div className="bg-dark hero " id="hero">
        <div className="container-fluid ">
          <div className="flex flex-col pt-5 text-white lg:flex-row lg:pt-28">
            <div
              className="basis-1/5 md:basis-1/3 pt-40 pl-0 md:pt-32 2xl:pt-60 md:pl-10 stroke-[2px] mbl-resp-hero "
              data-aos="fade-right"
            >
              <h1 className="text-[4.7rem] 2xl:text-[7.7rem] font-black pop main-heading flex lg:justify-start leading-[8rem]">
                LONELY
              </h1>
              <h6 className="flex  ml-1 text-5xl text-[#d8aaf8] font-black pop main-heading2 lg:justify-start">
                FANS
              </h6>
            </div>
            <div className=" basis-1/5 lg:basis-1/3 justify-center flex p-16 block hidden lg:block   lg:p-0 bachi-bg h-[1000px] ">
              <img src="/assets/Bachi.png" alt="Picture of the author" />
            </div>
            <div
              className="pt-12 pl-0 basis-1/3 md:pt-40 md:pl-20"
              data-aos="fade-left"
            >
              <h5 className="text-[1.8rem] xl:text-[2.5rem] 2xl:text-[3.5rem]  monofont flex  lg:justify-start">
                A revolutionary <br />
              </h5>
              <h5 className="text-[1.7rem] xl:text-[2.5rem]  2xl:text-[3.5rem] monofont flex  lg:justify-start">
                <span className="pink-color">fan platform</span>
              </h5>
              <p className="flex  my-3 text-base font-semibold xl:text-lg 2x:text-xl lg:justify-start">
                Sell any type of content. Easy to start!
              </p>
              <p className="flex leading-8  text-xs md:leading-8 md:tracking-wider home-txt 2xl:text-base lg:justify-start">
                Completely free of judgement. No surprise account <br />
                closings or changes in allowed content. Payments <br /> easily
                and in time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
