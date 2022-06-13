import React from "react";
import Faqpop from "./Faqpop";
import AnimatedText from "react-animated-text-content";

export default function Faq() {
  return (
    <>
      <div className="h-screen" id="faq">
        <div className="container-fluid  ">
          <div className="flex flex-col lg:flex-row  text-white pt-20  2xl:pt-20 h-screen">
            <div className=" basis-0 md:basis-0 lg:basis-6/12 ml-0 md:ml-40 lg:ml-0 2xl:ml-10 faq-bachi ">
              <div>
                <AnimatedText
                  type="words"
                  interval={0.04}
                  duration={0.8}
                  animation={{
                    x: "-1px",
                    y: "-100px",
                    ease: "ease",
                    scale: 1.06,
                  }}
                  className="pop text-5xl flex align-middle  text-center lg:mt-52 2xl:mt-60 md:text-center xl:text-[100px] 2xl:text-[160px] font-black  stroke-white stroke-2 lg:ml-8 md:ml-36"
                >
                  FAQ
                </AnimatedText>

                <div className="flex">
                  <AnimatedText
                    type="words"
                    interval={0.04}
                    duration={0.8}
                    animation={{
                      x: "-100px",
                      y: "100px",
                      ease: "ease",
                      scale: 1.06,
                    }}
                    className="monofont pb-6 text-xl md:ml-10 mt-2 md:text-3xl 2xl:text-5xl font-bold flex  align-middle md:justify-start"
                  >
                    For
                  </AnimatedText>
                  <AnimatedText
                    type="words"
                    interval={0.04}
                    duration={0.8}
                    animation={{
                      x: "-100px",
                      y: "100px",
                      ease: "ease",
                      scale: 1.06,
                    }}
                    className="monofont pb-6 text-xl md:ml-2 mt-2 md:text-3xl 2xl:text-5xl font-bold flex  align-middle md:justify-start pink-color "
                  >
                    creators
                  </AnimatedText>
                  <AnimatedText
                    type="words"
                    interval={0.04}
                    duration={0.8}
                    animation={{
                      x: "-100px",
                      y: "100px",
                      ease: "ease",
                      scale: 1.06,
                    }}
                    className="monofont pb-6 text-xl md:ml-2 mt-2 md:text-3xl 2xl:text-5xl font-bold flex  align-middle md:justify-start pink-color "
                  >
                    and
                  </AnimatedText>
                  <AnimatedText
                    type="words"
                    interval={0.04}
                    duration={0.8}
                    animation={{
                      x: "-100px",
                      y: "100px",
                      ease: "ease",
                      scale: 1.06,
                    }}
                    className="monofont pb-6 text-xl md:ml-2 mt-2 md:text-3xl 2xl:text-5xl font-bold flex  align-middle md:justify-start pink-color "
                  >
                    fans
                  </AnimatedText>
                </div>
              </div>
            </div>

            <div className="basis-6/12 mr-0 ml-0 md:mx-auto lg:ml-0 2xl:mr-20 lg:my-auto  ">
              <Faqpop
                btntext="What is the LOF platform for?"
                poptext="LOF Platform is a revolutionary fan platform that allows all
                  types of content creators to publish content in many different
                  forms (images, videos, live streams, music and NFTs).
                  Creators can freely choose the fee for users to view their
                  content. The platform will charge a minimal share of the
                  earnings, up to 15% and as little as 5%. 
                   For customers, the LOF Platform is a place where they
                  can view and purchase content from the most interesting
                  content creators around the world at the most competitive
                  prices. Anonymously if they choose to, depending on the
                  payment format they choose!"
              />

              <Faqpop
                btntext="How long does it take to become a creator?"
                poptext="Becoming a creator is a very easy and fast process. It does
                    not require any prior knowledge or skill! You just need to
                    fill in a few details and be verified by the platform
                    moderators before you can start releasing your content."
              />

              <Faqpop
                btntext="How much money will I earn with LOF?"
                poptext="The amount you earn is determined by your ability to grow a fan base, the amount of content you sell and the price you choose to sell it for. In full transparency, we cannot promise a minimum income. What we can promise however, is all the tools you need to be successful, connecting you with a great amount of potential new fans from our userbase and answer all your questions. We have a healthy community of content creators and an open atmosphere to cross promote and network with.

                By accepting our LOF cryptocurrency token as part of your payments, there is the potential for an exponential gain in value due to the ecosystems impact on the supply, as well as passive income generation. By holding LOF cryptocurrency tokens in your possession, you will automatically receive passive income sent to your wallet! Don’t worry, if this sounds confusing, we have videos to better explain it in our education center!"
              />
              <Faqpop
                btntext="Who can create on the LOF platform?"
                poptext="Everyone! All kinds of content creators are welcome and free to release content. The content must follow legal restrictions, but besides that LOF is 100% free of judgement."
              />
              <Faqpop
                btntext="What methods are used for payments?"
                poptext="Becoming a creator is a very easy and fast process. It does
                    not require any prior knowledge or skill! You just need to
                    fill in a few details and be verified by the platformUsers can pay using a credit card or a crypto wallet. Acceptable cryptocurrencies are BUSD, BNB and of course our native LOF Token. Users who would like to privately purchase content will prefer to use cryptocurrency. If you’re not familiar with cryptocurrency or the process of using it, we have how-to videos in our education center!
                   "
              />
              <Faqpop
                btntext="How frequent are payouts to content creators?"
                poptext="Payouts will take place once per month for credit/debit card purchases. Crypto payments are practically instant and are not subject to chargebacks! If you’re not familiar with cryptocurrency or the process of using it, we have how-to videos in our Education Center!"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
