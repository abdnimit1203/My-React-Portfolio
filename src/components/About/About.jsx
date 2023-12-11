/* eslint-disable react/no-unescaped-entities */
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import HeaderText from "../HeaderText/HeaderText";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div id="about">
      <HeaderText text1="Get to know" text2="About Me" />
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="md:w-1/2">
          <img
            src="assets/images/abd3-circle-ylw.png"
            alt="abdullah-image"
            className="max-w-sm rounded-lg hover:scale-90 ease-in-out transition duration-200"
          />
        </div>
        <div className=" text-lg md:text-xl md:w-3/4">
          <p className="hover:scale-110 ease-in-out transition cursor-pointer rounded-lg hover:border p-4 ">
            My name is <span className="text-primary font-semibold">Abdullah Ibne Ali</span>. My academic background includes a{" "}
            <span className="text-primary font-semibold"> BSc</span> in Computer
            Science and Engineering
            <span className="text-primary font-semibold"> (CSE)</span> from
            North South University, where I studied in the ECE Department. I was
            born and raised in Gazipur, Dhaka,{" "}
            <span className="text-primary font-semibold"> Bangladesh.</span>
          </p>
            
          
          <p className="hover:scale-110 ease-in-out transition cursor-pointer rounded-lg hover:border p-4 ">
            I am intrested in web developing with{" "}
            <span className="text-primary"> ReactJs</span>. I love to make
            websites and add life to them. Currently perfecting my learning in
            MERN Stack developement.
          </p>
          <p className="hover:scale-110 ease-in-out transition cursor-pointer rounded-lg hover:border p-4 ">
            Traveling is something I enjoy because it can provide a fresh
            outlook on everything. It brings me peace to scape from web world
            and enjoy the real world. I am always seeking out adventure and
            eager to learn about the world through travel.
          </p>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
          >
            <button className="btn btn-secondary hover:btn- transition duration-300 ease-in-out hover:scale-105 mt-10 m-4">
              <MdOutlineConnectWithoutContact className="text-xl" /> Let's Talk
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
