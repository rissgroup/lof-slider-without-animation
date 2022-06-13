import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";
import swal from "sweetalert";

export default function Contactus() {
  // const form = useRef();

  //  function sendEmail(e){
  //   e.preventDefault();
  //    emailjs.sendForm('service_p8mdyic', 'template_pjkm7ve', e.target, 'XXuN3CBVOAG5hVY2m' ).then(res=>{
  //      console.log(res);
  //       swal("Email Send Successfully!", "We will get back to you soon!");
  //      window.location.reload(false);

  //    }).catch(err=>console.log(err));
  //  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p8mdyic",
        "template_pjkm7ve",
        form.current,
        "XXuN3CBVOAG5hVY2m"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal("Email Send Successfully!", "We will get back to you soon!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="mt-2">
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label
              htmlFor="Name"
              className="block mb-2 text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-transparent  border-b-2 borde-x-0 border-[#d8aaf8] text-white text-sm    block w-full p-2.5  dark:text-white  outline-none "
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-transparent border-b-2 border-[#d8aaf8] text-white text-sm   outline-none  block w-full p-2.5  dark:text-white "
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Message
            </label>
            <input
              type="text"
              id="message"
              name="message"
              className="bg-transparent border-b-2 outline-none  border-[#d8aaf8] text-white text-sm  block w-full p-2.5  dark:text-white "
              required
              autoComplete="off"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-[#d8aaf8] bg-transparent border  border-[#d8aaf8]  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
