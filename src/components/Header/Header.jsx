/* eslint-disable react/no-unescaped-entities */
import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { SiGoogledocs } from "react-icons/si";
import { LuMouse } from "react-icons/lu";
import { FaAngleDoubleDown } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

import CV from "../../../public/assets/images/ABDULLAH IBNE ALI_FrontEnd_Resume.pdf";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  const options = {
    duration: 1500,
    smooth: true,
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div className="w-full py-10 md:py-16 " id="header">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between ">
        <div className="">
          <img src="assets/images/abd2.png" className="max-w-sm rounded-lg " />
        </div>
        <div className="py-6 max-w-md">
          <h1 className="text-4xl  md:text-5xl font-bold">Hi ! I'm ABDULLAH</h1>
          {/* <h3 className="py-4 text-2xl font-semibold text-slate-600">
            Frontend Developer
          </h3> */}
          <h3 className="py-4 text-2xl font-semibold text-slate-600">
         
            <span className="text-primary">
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Web Developer","Front-End React Developer", "Backend - MERN Stack Developer","Front-End Developer"]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
                onLoopDone={handleDone}
              />
            </span>
          </h3>
          <p className="py-6 text-lg md:text-xl ">
            Passionate and detail-oriented Front-End Developer proficient in the
            MERN stack with 6 months of hands-on experience in creating
            responsive and user-friendly web applications.
          </p>
          <p className="text-primary flex gap-2 items-center mb-6">
            <CiLocationOn className="animate-pulse text-xl" /> Dhaka, Bangladesh
          </p>

          <a href={CV} download>
            <button className="btn btn-primary text-white transition duration-300 ease-in-out hover:scale-105">
              <SiGoogledocs className="text-xl" /> Download Resume
            </button>
          </a>
        </div>
        <div className="flex lg:flex-col gap-6 text-2xl text-primary items-center">
          <hr className="border-b-4 md:rotate-90 border-primary w-10" />
          <Link
            to={"https://www.linkedin.com/in/abdullah-ibne-ali"}
            target="_blank"
          >
            <FiLinkedin className="transition duration-200 ease-in-out hover:scale-125 cursor-pointer" />
          </Link>
          <Link to={"https://github.com/abdnimit1203"} target="_blank">
            <RiGithubLine className="transition duration-200 ease-in-out hover:scale-125 cursor-pointer" />
          </Link>
          <hr className="border-b-4 md:rotate-90 border-primary w-10 m-2" />
        </div>
      </div>
      <button
        onClick={() => animateScroll.scrollToBottom(options)}
        className="cursor-pointer md:ml-[15%] flex gap-2 items-center mx-4  my-10 transition duration-300 ease-in-out hover:scale-105 "
      >
        <LuMouse className="text-2xl text-accent" />
        Scroll Down
        <FaAngleDoubleDown className=" text-accent animate-bounce" />
      </button>
    </div>
  );
};

export default Header;
