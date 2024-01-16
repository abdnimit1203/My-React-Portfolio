import { BsCarFront, BsFillBuildingsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { Link } from "react-router-dom";
import "./ProjectCard.css";
import SliderProject from "../SliderProject/SliderProject";
const ProjectCard = () => {
  const project1 = [
    "https://i.imgur.com/VSH8CJ6.png",
    "https://i.imgur.com/RH5Gc40.png",
    "https://i.imgur.com/afi9cSD.png",
    "https://i.imgur.com/ALejUMr.png",
  ];
  const project2 = [
    "https://i.imgur.com/mEaH2ts.png",
    "https://i.imgur.com/RVkfpN9.png",
    "https://i.imgur.com/LmnQbpC.png",
    "https://i.imgur.com/SU7hQlR.png",
    "https://i.imgur.com/OnQdcVY.png"
  ];
  const project3 = [
    "https://i.imgur.com/d6Y4B8D.png",
    "https://i.imgur.com/3Hmi51N.png",
    "https://i.imgur.com/NxWTtU9.png",
    "https://i.imgur.com/p06Y0kn.png",
    "https://i.imgur.com/UiJdpIg.png"
  ];
  return (
    <div className="my-16 space-y-6 md:space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center justify-center shadow-md p-6 rounded-xl  transition duration-150 bg-cyan-50 items-center border" data-aos="fade-right"  data-aos-duration="800">
        <div className="content">
          <SliderProject projectImages={project1}></SliderProject>
          {/* <div className="screen">
          <img src="https://i.ibb.co/vJMP6T6/hompage.png"  className="cursor-pointer"/>
        </div> */}
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold gap-4 items-center text-center">
            ABuild Homes Estate{" "}
            <BsFillBuildingsFill className="text-3xl text-primary inline ml-4" />
          </h2>
          <p className="my-6 text-sm md:text-base max-w-xl mx-auto">
            A real estate website where people can buy houses by offering price.
            There are 3 roles and Dashboards for each type of users.There is -{" "}
            <span className="font-semibold">User, Agent and Admin </span>
            role for this website.
            <br />
            Admin manages the properties , total sales and user roles. Stripe
            payment is available
          </p>
          <div className="flex gap-2 items-center justify-center">
            <img src="assets/images/mongo.png" alt="mongo" className="w-10" />
            <img
              src="assets/images/express.png"
              alt="express"
              className="w-10"
            />
            <img src="assets/images/react.png" alt="react" className="w-10" />
            <img src="assets/images/node.png" alt="node" className="w-10" />
          </div>
          <div className="flex justify-center text-xs text-gray-500 flex-col pt-2 md:pt-5">
            <p>Demo email : <span className="text-sky-700">demo@email.com</span> </p>
            <p>Demo password : <span className="text-sky-700">Demo123@</span> </p>
          </div>
          <div className="font-semibold my-8 space-x-6 ">
            <Link
              to={"https://github.com/abdnimit1203/Abuild-Homes-Estate-Client"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Code <FaGithub className="inline" />
            </Link>
            <Link
              to={"https://abuild-homes-estate-abd.netlify.app/"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Live Demo <MdWeb className="inline" />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 text-center justify-center shadow-md p-6 rounded-xl   transition duration-150 bg-cyan-50 items-center border "  data-aos="fade-right"  data-aos-duration="800">
        <div className="block md:hidden">
        <SliderProject projectImages={project2}></SliderProject>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold gap-4 items-center text-center">
            Wheels World
            <BsCarFront className="text-3xl text-rose-600 inline ml-4" />
          </h2>
          <p className="my-6 text-sm md:text-base max-w-xl mx-auto">
            A Car Dealership website where people can buy cars.This is mostly
            Frontend based website with some backend features.
            <br />
            Just like an ecommerce site choose from brands , add to cart , go to
            cart then checkout with your price. There is a dark theme available
            for this website and its totally mobile friendly.
          </p>
          <div className="flex gap-2 items-center justify-center">
            <img src="assets/images/react.png" alt="react" className="w-10" />
            <img src="assets/images/mongo.png" alt="mongo" className="w-10" />
            <img
              src="assets/images/express.png"
              alt="express"
              className="w-10"
            />
            <img src="assets/images/node.png" alt="node" className="w-10" />
          </div>
          <div className="flex justify-center text-xs text-gray-500 flex-col pt-2 md:pt-5">
            <p>Demo email : <span className="text-sky-700">demo@email.com</span> </p>
            <p>Demo password : <span className="text-sky-700">Demo123@</span> </p>
          </div>
          <div className="font-semibold my-8 space-x-6 ">
            <Link
              to={"https://github.com/abdnimit1203/Wheels-World"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Code <FaGithub className="inline ml-4" />
            </Link>
            <Link
              to={"https://brand-shop-automotive-b8a10.web.app/"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Live Demo <MdWeb className="inline ml-4" />
            </Link>
          </div>
        </div>
        <div className="md:block hidden">
        <SliderProject projectImages={project2}></SliderProject>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center justify-center shadow-md p-6 rounded-xl   transition duration-150 bg-cyan-50 items-center"  data-aos="fade-right"  data-aos-duration="800">
        <div>
        <SliderProject projectImages={project3}></SliderProject>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold gap-4 items-center text-center">
            📝 ColabTask
          </h2>
          <p className="my-6 text-sm md:text-base max-w-xl mx-auto">
            An Online based student group stdy platform. Where students can
            share heir assignments and submit them at the same time! Student can
            chat post and discuss!
            <br />
            All subitted assignments can be marked else it gets pending status.
            A student can see all their submitted assignments and other details.
            Their is chat post feature where students can discuss matters with
            others.
          </p>
          <div className="flex gap-2 items-center justify-center">
            <img src="assets/images/react.png" alt="react" className="w-10" />
            <img src="assets/images/mongo.png" alt="mongo" className="w-10" />
            <img
              src="assets/images/express.png"
              alt="express"
              className="w-10"
            />
            <img src="assets/images/node.png" alt="node" className="w-10" />
          </div>
          <div className="flex justify-center text-xs text-gray-500 flex-col pt-2 md:pt-5">
            <p>Demo email : <span className="text-sky-700">demo@email.com</span> </p>
            <p>Demo password : <span className="text-sky-700">Demo123@</span> </p>
          </div>
          <div className="font-semibold my-8 space-x-6 ">
            <Link
              to={"https://github.com/abdnimit1203/Online-group-study"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Code <FaGithub className="inline ml-4" />
            </Link>
            <Link
              to={"https://online-group-study-fdf3b.web.app"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Live Demo <MdWeb className="inline ml-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
