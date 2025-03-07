import { Progress } from "antd";
import Image from "next/image";
import Link from "next/link";

const Resume = ({ envData }) => {
  const contactDetails = [envData.mobile, envData.email, envData.location];

  const skills = [
    "Reactjs",
    "NextJS",
    "NodeJS",
    "Express",
    "AWS Cloud",
    "MongoDB",
    "Docker",
    "Redis",
  ];

  const projects = [
    {
      title: "fruitbae.com",
      link: "https://www.fruitbae.com/",
    },
    {
      title: "Flowers.com",
      link: "https://www.proflowers.com/",
    },
    {
      title: "amararaja.com",
      link: "https://www.amararaja.com/",
    },
    {
      title: "advanceskinhairclini",
      link: "https://www.advanceskinhairclinic.com/",
    },
    {
      title: "FeedCenter.com",
      link: "https://feedocenter.com/#/",
    },
    {
      title: "EarnX",
      link: "https://earnxj.vercel.app/",
    },
  ];

  return (
    <div
      className="bg-[url(/images/resume/frame.png)] bg-center bg-no-repeat"
      style={{
        backgroundSize: "100% 100%",
      }}
    >
      <div className="grid lg:grid-cols-2 lg:gap-0 gap-4 lg:pt-0 pt-12 px-8">
        <div className="lg:pt-16 2xl:pl-12 flex lg:justify-start justify-center">
          <div
            className="bg-[#00BFC3] rounded-full pr-3 pl-1 pt-1 w-[250px] h-[250px]"
            style={{ boxShadow: "6px 6px 5px 0px rgba(0,0,0,0.75)" }}
          >
            <Image
              width={2048}
              height={2048}
              src="/images/profile/rahul1.jpg"
              alt="pic-5"
              className="rounded-full rotate-[15deg]"
            />
          </div>
        </div>

        <div className="lg:pt-24 flex lg:justify-end justify-center items-start lg:pr-8">
          <div className="bg-[#FFDFDD] w-[300px] p-4 py-8 rounded-xl">
            <h1 className="text-[#027E84] text-2xl font-bold">
              {envData.myName}
            </h1>
            <h1 className="font-semibold text-sm">{envData.myRole}</h1>

            <div className="pt-6">
              <h1 className="text-[#027E84] font-bold text-lg">Contact Me</h1>

              <ul className="space-y-2 pt-2">
                {contactDetails.map((item, index) => (
                  <li
                    className="flex items-center gap-2 text-sm text-gray-500"
                    key={index}
                  >
                    <i className="ri-circle-fill text-[8px]"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 lg:px-16 px-8 py-16">
        <div className="lg:border-r-2 border-x-2 lg:border-l-0 lg:px-0 px-4 border-[#E1594F] space-y-8">
          <div className="flex gap-3 pb-4 border-b-2 border-[#E1594F]">
            <div>
              <button className="bg-[#E1574D] w-10 h-10 rounded-full flex items-center justify-center text-white text-xl hover:bg-[#FFDFDD] hover:text-black duration-200">
                <i className="ri-image-edit-fill"></i>
              </button>
            </div>
            <div className="w-full">
              <button className="bg-[#FFDFDD] text-[#E1574D] px-4 rounded-lg py-1 text-xl font-bold mt-1">
                Work Experience
              </button>
              <div className="pt-4 space-y-1w-full">
                <h1 className="text-sm font-bold text-gray-700">
                  Full Stack Developer (3 Years+)
                </h1>
                <h3 className="text-sm text-gray-500">
                  <span>Techsunset [2021-2025]</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="flex gap-3 pb-4  border-b-2 border-[#E1594F]">
            <div>
              <button className="bg-[#E1574D] w-10 h-10 rounded-full flex items-center justify-center text-white text-xl hover:bg-[#FFDFDD] hover:text-black duration-200">
                <i className="ri-user-fill"></i>
              </button>
            </div>
            <div>
              <button className="bg-[#FFDFDD] text-[#E1574D] px-4 rounded-lg py-1 text-xl font-bold mt-1">
                About Me
              </button>
              <p className="text-sm text-gray-500 py-4 w-10/12 text-justify leading-relaxed">
                Full-Stack MERN Developer with extensive experience in
                JavaScript, React, Node.js, and MongoDB. Expert in designing and
                developing scalable web applications, enhancing user experience,
                and optimizing backend performance for high-traffic platforms.
              </p>
            </div>
          </div>

          <div className="flex gap-3 border-b-2 border-[#E1594F]">
            <div>
              <button className="bg-[#E1574D] w-10 h-10 rounded-full flex items-center justify-center text-white text-xl hover:bg-[#FFDFDD] hover:text-black duration-200">
                <i className="ri-suitcase-fill"></i>
              </button>
            </div>
            <div>
              <button className="bg-[#FFDFDD] text-[#E1574D] px-4 rounded-lg py-1 text-xl font-bold mt-1">
                Education
              </button>

              <div className="space-y-1 my-4">
                <h1 className="text-sm font-semibold flex items-center gap-1">
                  <i className="ri-circle-fill text-[8px]"></i>
                  <span>Mern Stack Course</span>
                </h1>
                <p className="text-gray-400 text-xs flex items-center justify-between pr-2">
                  <span>Wap Institute</span>
                  <span>[2020-21]</span>
                </p>
              </div>

              
              <div className="my-4">
                <h1 className="text-sm font-semibold flex items-center gap-1">
                  <i className="ri-circle-fill text-[8px]"></i>
                  <span>Class XII</span>
                </h1>
                <p className="text-gray-400 text-xs flex justify-between pr-2">
                  <span>Rajasthan Board</span>
                  <span>[2021-22]</span>
                </p>
              </div>

              <div className="space-y-1 my-4">
                <h1 className="text-sm font-semibold flex items-center gap-1">
                  <i className="ri-circle-fill text-[8px]"></i>
                  <span>BCA</span>
                </h1>
                <p className="text-gray-400 text-xs flex items-center justify-between pr-2">
                  <span>Raffles university</span>
                  <span>[2022-25]</span>
                </p>
              </div>


            </div>
          </div>
        </div>

        <div className="border-x-2 lg:border-x-0 lg:px-0 px-4 border-[#E1594F] space-y-8">
          <div className="flex gap-3 border-b-2 border-[#E1594F] pl-8 pb-8">
            <div>
              <button className="bg-[#E1574D] w-10 h-10 rounded-full flex items-center justify-center text-white text-xl hover:bg-[#FFDFDD] hover:text-black duration-200">
                <i className="ri-settings-2-line"></i>
              </button>
            </div>
            <div className="w-full">
              <button className="bg-[#FFDFDD] text-[#E1574D] px-4 rounded-lg py-1 text-xl font-bold mt-1">
                Skills
              </button>
              <div className="mt-4">
                <h1 className="text-[#E1574D] font-bold">Expertise Skill</h1>
                <div className="pl-2">
                  <div className="grid grid-cols-1 gap-1 mt-2">
                    {skills.map((item, index) => (
                      <div key={index} className="flex gap-3 items-center">
                        <i className="ri-circle-fill text-[6px]"></i>
                        <span className="text-gray-400 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h1 className="text-[#E1574D] font-bold">Language Skill</h1>
                <div className="pl-2">
                  <div className="grid grid-cols-1 mt-2 gap-2">
                    <div className="flex gap-3 items-center">
                      <i className="ri-circle-fill text-[6px]"></i>
                      <span className="text-gray-400 text-sm">English</span>
                    </div>

                    <div className="flex gap-3 items-center">
                      <i className="ri-circle-fill text-[6px]"></i>
                      <span className="text-gray-400 text-sm">Hindi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pl-8 pb-8 pt-12">
            <div>
              <button className="bg-[#E1574D] w-10 h-10 rounded-full flex items-center justify-center text-white text-xl hover:bg-[#FFDFDD] hover:text-black duration-200">
                <i className="ri-file-code-line"></i>
              </button>
            </div>
            <div className="w-full">
              <button className="bg-[#FFDFDD] text-[#E1574D] px-4 rounded-lg py-1 text-xl font-bold mt-1">
                Project
              </button>
              <div className="mt-4">
                <h1 className="text-[#E1574D] font-bold">Top Projects</h1>
                <div className="pl-2 mt-2">
                  {projects.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="text-gray-400  hover:text-blue-600 duration-300"
                      target="_blank"
                    >
                      <div className="flex gap-3 items-center">
                        <i className="ri-folder-open-fill"></i>
                        <span className="text-sm">{item.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
