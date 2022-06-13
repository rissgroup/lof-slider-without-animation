import React from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Contactus from "../Contactus";

export default function Footer() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="txt-botm absolute bottom-0 left-0 z-10 w-full pb-2.5 ">
        <div className="flex flex-col md:flex-row">
          <div className="basis-ful md:basis-1/4 flex gap-3 pl-0 md:pl-11 mb-3 md:mb-0 justify-center md:justify-start">
            <a href="https://twitter.com/LOFcrypto" className="svg-hover">
              <img src="/assets/Icons/Twitter.svg" alt="" />

              <img src="/assets/Icons/Twitter-p.svg" alt="" />
            </a>
            <a href="https://t.me/LonelyFansChat" className="svg-hover">
              <img src="/assets/Icons/telegram.svg" alt="" />

              <img src="/assets/Icons/telegram-p.svg" alt="" />
            </a>
            <a
              href="https://www.instagram.com/lofcrypto/"
              className="svg-hover"
            >
              <img src="/assets/Icons/instagram.svg" alt="" />

              <img src="/assets/Icons/instagram-p.svg" alt="" />
            </a>
            <a
              href="https://discord.com/invite/T2fSbGbgWj"
              className="svg-hover"
            >
              <img src="/assets/Icons/discord.svg" alt="" />

              <img src="/assets/Icons/discord-p.svg" alt="" />
            </a>
            <a href="https://www.reddit.com/r/LOFcrypto/" className="svg-hover">
              <img src="/assets/Icons/reddit.svg" alt="" />

              <img src="/assets/Icons/reddit-p.svg" alt="" />
            </a>
            <a href="" className="svg-hover ">
              <img src="/assets/Icons/heart-w.png" alt="" />

              <img src="/assets/Icons/heart-p2.png" alt="" />
            </a>
          </div>
          <div className="basis-2/4  ">
            <ul className=" gap-6 flex justify-center text-white text-sm font-medium hind ">
              <Link href="/termandConditions" className="glow ">
                <a className="hover:text-[#d8aaf8]">Term and Condition</a>
              </Link>

              <Link href="/privacy" className="glow">
                <a className="hover:text-[#d8aaf8]">Privacy</a>
              </Link>

              <Link href="/riskpolicy" className="glow">
                <a className="hover:text-[#d8aaf8]">Risk Policy</a>
              </Link>

              <Link href="#" className="glow">
                <a onClick={openModal} className="hover:text-[#d8aaf8]">
                  Contact
                </a>
              </Link>
            </ul>

            {/* *************** pop start data ********* */}
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-80" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-[600px] max-w-2xl  transform overflow-hidden rounded-2xl card-bg p-6 text-left align-middle shadow-xl transition-all">
                        <div className="float-right">
                          {" "}
                          <svg
                            onClick={closeModal}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-[#d8aaf8]  "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>

                        <div className="p-5 md:p-10">
                          <div className="text-center ">
                            <h1 className="text-[#d8aaf8] text-lg md:text-3xl font-semibold my-5 monofont">
                              Contact us
                            </h1>
                            <p className="text-white text-xs md:text-sm 2xl:text-lg font-medium hind mb-5">
                              Got question? We’d love to hear from you. Send us
                              a message and we’ll respond as soon as possible.
                            </p>
                          </div>
                          <Contactus />
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
            {/* *************** pop End data ********* */}
          </div>
          <div className="basis-1/4"></div>
        </div>
      </div>
    </>
  );
}
