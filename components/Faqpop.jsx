import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function MyModal(props) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md card-bg mt-5 w-full md:w-[550px] text-left px-8  2xl:w-[800px]  py-4 font-semibold monofont pink-color text-sm md:text-xl 2xl:text-3xl hover:bg-opacity-30 focus:outline-none  focus-visible:ring-opacity-75"
        >
          {props.btntext}
        </button>
      </div>

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

          <div className="fixed inset-0  overflow-y-auto">
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
                <Dialog.Panel className="w-full max-w-5xl  transform overflow-hidden rounded-2xl card-bg p-6 text-left align-middle shadow-xl transition-all">
                  <div className="float-right">
                    {" "}
                    <svg
                      onClick={closeModal}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#d8aaf8] ml-5 "
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

                  <div className="mt-2 p-5 md:p-10">
                    <p className="text-xl hind text-white">{props.poptext}</p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
