import React from "react";

import AnimatedText from "react-animated-text-content";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Contactus from "../components/Contactus";

export default function Bec2() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      
      <section className="container-fluid" >
        <div className="flex flex-col md:flex-row text-white">
          <div className=" basis-6/12  my-auto mt-16 md:mt-52 lg:mt-64 2xl:mt-96">
            <div className="flex">
             
             <p className="animated-paragraph text-4xl leading-10  md:text-2xl   lg:text-5xl 2xl:text-6xl monofont pb-2 md:pb-5 lg:pl-20">Become a</p>
              <p className="animated-paragraph text-4xl leading-10  md:text-3xl lg:text-5xl 2xl:text-6xl monofont pb-2 md:pb-5 pink-color md:pl-5">creator</p>
            </div>
          
            <p className="md:leading-8 text-[18px] lg:pl-20">Create an account and we’ll get you started in no time!</p>
           
            <p className="md:leading-8 text-[17px] tracking-tight lg:pl-20">More features, profit and freedom - with dedicated support in
              everything.</p>

            <button
              onClick={openModal}
              className="mb-5 mt-4 px-5 py-2 text-sm font-medium rounded-md button button--moema button--text-upper lg:ml-20"
            >
              Create an account
            </button>
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
                            <h1 className="text-[#d8aaf8] text-lg md:text-2xl font-semibold my-5 monofont">
                              The LOF platform is in development!
                            </h1>
                            <p className="text-white text-xs md:text-sm 2xl:text-lg font-medium hind mb-5">
                              Fill the form below to be among the first content
                              creators to be notified as soon as we are ready to
                              launch!
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
          </div>
          <div className="basis-6/12 pt-20 ">
            <img src="/assets/be-slider/model.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
