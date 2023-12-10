/* eslint-disable react/no-unescaped-entities */
import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { SiGoogledocs } from "react-icons/si";

const Header = () => {
  return (
    <div className="w-full py-10 md:py-16 ">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between ">
        <div className="">
          <img src="assets/images/abd2.png" className="max-w-sm rounded-lg " />
        </div>
        <div className="py-6 max-w-md">
          <h1 className="text-4xl  md:text-5xl font-bold">Hi ! I'm ABDULLAH</h1>
          <h3 className="py-4 text-xl">Frontend Developer</h3>
          <p className="py-6 ">
            Passionate and detail-oriented Front-End Developer with MERN stack
            knowledge with 6 months of hands-on experience in creating
            responsive and user-friendly web applications.
          </p>
          <button className="btn btn-primary text-white transition duration-300 ease-in-out hover:scale-105">
          <SiGoogledocs className="text-xl"/> Download Resume
          </button>
        </div>
        <div className="flex md:flex-col gap-6 text-2xl text-primary">
          <FiLinkedin className="transition duration-200 ease-in-out hover:scale-125 cursor-pointer" />

          <RiGithubLine className="transition duration-200 ease-in-out hover:scale-125 cursor-pointer"  />
        </div>
      </div>
    </div>
  );
};

export default Header;
