"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";

const Layout = ({ children, envData }) => {
  const test = "z";
  const router = useRouter();
  const downloadPdf = () => {
    const pdfUrl = "/pdf/Rahul.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Rahul.pdf";
    link.click();
  };

  useEffect(() => {
    downloadPdf();
    router.push("/portfolio");
  }, [test]);

  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);
  const abouts = [
    {
      icon: "ri-smartphone-line",
      iconColor: "text-rose-400",
      label: "Phone",
      desc: envData.mobile,
      border: false,
    },
    {
      icon: "ri-archive-stack-line",
      iconColor: "text-lime-700",
      label: "Email",
      desc: envData.email,
      border: true,
    },
    {
      icon: "ri-map-pin-2-line",
      iconColor: "text-rose-700",
      label: "Location",
      desc: envData.location,
      border: true,
    },
    {
      icon: "ri-calendar-2-line",
      iconColor: "text-purple-500",
      label: "Birthday",
      desc: envData.birth,
    },
  ];

  const menus = [
    {
      icon: "ri-article-line",
      label: "Resume",
      href: "/resume",
    },
    {
      icon: "ri-suitcase-line",
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      icon: "ri-contacts-book-line",
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="bg-[url(/bg.jpg)] bg-no-repeat bg-cover min-h-screen bg-fixed bg-center">
      <div className="xl:w-10/12 w-11/12 mx-auto py-16 2xl:hidden block relative">
        <div className="flex justify-end pr-8 mb-6">
          <button
            className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-semibold"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? (
              <i className="ri-close-line"></i>
            ) : (
              <i className="ri-menu-line"></i>
            )}
          </button>
        </div>

        <div
          className={`absolute w-full z-10 overflow-hidden duration-500 ${
            mobileMenu ? "h-[300px]" : "h-0"
          }`}
        >
          <div className="rounded-lg py-8 flex flex-col gap-4 px-12 bg-white shadow-sm">
            {menus.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`space-x-2  hover:text-blue-500 duration-300 ${
                  pathname === item.href ? "text-blue-500" : "text-gray-500"
                }`}
              >
                <i className={`${item.icon} text-xl`}></i>
                <span className="text-sm font-semibold">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="xl:w-10/12 w-11/12  mx-auto 2xl:pt-[12%] flex xl:flex-row flex-col gap-8 pb-8">
        <div className="">
          {/* 2xl:w-3/12 xl:w-4/12 */}
          <div className="bg-white pb-8 rounded-lg xl:sticky xl:top-[140px] px-8">
            <div className="relative 2xl:pb-[45%] flex justify-center">
              <div className="2xl:absolute 2xl:top-[-125px] 2xl:w-[75%] w-[250px]">
                <Image
                  width={100}
                  height={100}
                  layout="responsive"
                  src="/images/profile/rahul.png"
                  alt="pic"
                  className="2xl:mt-0 mt-8 mb-4 rounded-xl "
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-bold text-center">
                {envData.myName}
              </h1>
              <p className="bg-gray-100 text-center px-4 py-2 rounded text-sm font-semibold">
                {envData.role}
              </p>
              <div>
                <Link
                  href="#"
                  className="text-2xl block bg-gray-200 hover:bg-blue-600 duration-300 px-2 py-1 text-blue-700 rounded hover:text-white"
                >
                  <i className="ri-linkedin-fill"></i>
                </Link>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 mt-8">
              {abouts.map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-center py-3 ${
                    item.border && "border-b"
                  }`}
                >
                  <button
                    className={`bg-white text-3xl px-2 py-1  rounded shadow ${item.iconColor} hover:bg-blue-500 hover:text-white duration-300 cursor-default`}
                  >
                    <i className={item.icon}></i>
                  </button>
                  <div>
                    <label className="text-xs text-gray-600">
                      {item.label}
                    </label>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-6">
              <button
                onClick={downloadPdf}
                className="bg-blue-600 px-6 py-2 rounded text-white font-semibold text-lg hover:bg-gray-100 duration-300 hover:text-black border border-blue-600 hover:border-black"
              >
                <i className="ri-import-line font-normal text-xl mr-2"></i>
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">{children}</div>
        <div className="w-[150px] 2xl:block hidden">
          <div className="bg-white g-white rounded-lg sticky top-[20px] flex flex-col gap-12 px-8 py-12">
            {menus.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className={`flex flex-col items-center py-4 hover:bg-blue-500 hover:text-white text-gray-500 duration-300 rounded-lg text-sm ${
                  pathname === item.href
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                <i className={`${item.icon} text-2xl`}></i>
                <span className="">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
