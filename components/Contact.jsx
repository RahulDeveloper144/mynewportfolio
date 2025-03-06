"use client";

import { message } from "antd";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

const Contact = () => {
  const [loding, setLoding] = useState(false);

  const contact = async (event) => {
    event.preventDefault();
    const form = event.target;
    const values = {
      fullname: form.fullname.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    setLoding(true);

    try {
      const { data } = await axios.post("/api/contact", values, {
        "Content-Type": "application/json",
      });
      console.log(data)

      form.reset();
      message.success(
        "Thank you for visiting our website. We will get in touch with you shortly."
      );
    } catch (err) {
      message.error(err.response.data.message || err.message);
    } finally {
      setLoding(false);
    }
  };

  return (
    <div className="bg-white rounded-xl">
      <div className="lg:p-16 lg:pb-12 p-6">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold">Contact</h1>
          <Image width={211} height={15} src="/images/line.jpg" alt="line" />
        </div>

        <div className="bg-[#F8FBFB] px-8 py-16 rounded-lg mt-8">
          <h1 className="text-3xl text-gray-600 mb-4">
            I am always open to discussing product
          </h1>
          <h2 className="text-2xl font-bold">design work or partnerships.</h2>

          <div className="mt-8">
            <form className="space-y-12" onSubmit={contact}>
              <div className="flex flex-col">
                <label>Name *</label>
                <input
                  type="text"
                  name="fullname"
                  required
                  className="border-b border-gray-300 focus:border-rose-500 duration-300 bg-[#F8FBFB] outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="border-b border-gray-300 focus:border-green-500 duration-300 bg-[#F8FBFB] outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label>Message *</label>
                <textarea
                  type="text"
                  name="message"
                  required
                  rows={4}
                  className="border-b border-gray-300 focus:border-indigo-500 duration-300 bg-[#F8FBFB] outline-none"
                />
              </div>

              <div className="">
                {!loding && (
                  <button className="border border-black px-8 py-3 rounded-lg hover:border-blue-500 hover:text-white hover:bg-blue-500 duration-300 font-semibold">
                    Submit
                  </button>
                )}

                {loding && (
                  <button
                    className="flex items-center gap-1 text-lg bg-gray-300 px-6 py-2 rounded"
                    disabled
                  >
                    <sapn className="text-sm">wait </sapn>
                    <i className="ri-loader-2-line block animate-spin"></i>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="py-8 bg-[#F8FBFB]">
        <p className="text-center text-gray-500">
          © 2024 All Rights Reserved by Rahul.
        </p>
      </div>
    </div>
  );
};

export default Contact;
