"use client";

import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  const portfolios1 = [
    {
      src: "/images/projects/project2.png",
      techs: "Travel Landing , UX/UI",
      projectName: "FeedCenter",
      link: "https://feedocenter.com/#/",
      bgColor: "#FFF4F4",
    },
    {
      src: "/images/projects/project3.png",
      techs: "Travel Landing , UX/UI",
      projectName: "Flowers",
      link: "https://www.proflowers.com/",
      bgColor: "#EEF5FA",
    },
    {
      src: "/images/projects/project4.png",
      techs: "Travel Landing , UX/UI",
      projectName: "fruitbae.com",
      link: "https://www.fruitbae.com/",
      bgColor: "#EEF5FA",
    },
    {
      src: "/images/projects/project5.png",
      techs: "Travel Landing , UX/UI",
      projectName: "advanceskinhair",
      link: "https://www.advanceskinhairclinic.com/",
      bgColor: "#FFF4F4",
    },
    {
      src: "/images/projects/project6.png",
      techs: "Travel Landing , UX/UI",
      projectName: "amararaja.com",
      link: "https://www.amararaja.com/",
      bgColor: "#FFF4F4",
    },
    {
      src: "/images/projects/project1.png",
      techs: "Travel Landing , UX/UI",
      projectName: "EarnX crypto currency",
      link: "https://earnxj.vercel.app/",
      bgColor: "#EEF5FA",
    },
  ];

  return (
    <div className="bg-white rounded-lg">
      <div className="lg:p-16 p-6">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold">Portfolio</h1>
          <Image width={211} height={15} src="/images/line.jpg" alt="line" />
        </div>

        <div className="mx-auto px-0">
          <div className="grid sm:grid-cols-2 gap-8 py-8 flex-1">
            {portfolios1.map((item, index) => (
              <div key={index}>
                <div>
                  <div
                    className="flex flex-col pb-6 shadow-xl gap-3 items-center  portfolio-box"
                    style={{ background: item.bgColor }}
                  >
                    <div className="overflow-hidden h-[300px] relative group">
                      <img
                        className="w-full object-cover group-hover:translate-y-[-60%] transition-transform duration-1000 ease-in-out"
                        src={item.src}
                        alt={item.src}
                      />
                    </div>

                    <div className="w-9/12 mt-3 space-y-2">
                      <p className="text-xs text-gray-500">{item.techs}</p>
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base uppercase block font-semibold text-gray-800 hover:text-blue-500 duration-300"
                      >
                        {item.projectName}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

export default Portfolio;
