import { BsCarFront, BsFillBuildingsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <div className="my-16 space-y-6 md:space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center justify-center shadow-md p-6 rounded-xl hover:scale-105 transition duration-150 ">
        <div>
          <img
            src="https://i.ibb.co/vJMP6T6/hompage.png"
            alt="project -demo"
            className="aspect-square object-cover max-w-[360px] rounded-xl mx-auto hover:cursor-pointer hover:scale-150 transition duration-200"
          />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold gap-4 items-center text-center">
            ABuild Homes Estate{" "}
            <BsFillBuildingsFill className="text-3xl text-primary inline ml-4" />
          </h2>
          <p className="my-6 text-sm md:text-base">
            A real estate website where people can buy houses by offering price.
            There are 3 roles and Dashboards for each type of users.There is -{" "}
            <span className="font-semibold">User, Agent and Admin </span>
            role for this website. 
            <br />
            Admin manages the properties , total sales and user roles. Stripe
            payment is available
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
          <div className="font-semibold my-8 space-x-6 ">
            <Link
              to={"https://github.com/abdnimit1203/Abuild-Homes-Estate-Client"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Code <FaGithub className="inline" />
            </Link>
            <Link
              to={"https://abuild-homesabd.web.app/"}
              target="_blank"
              className="transiton duration-150 hover:text-primary"
            >
              Live Demo <MdWeb className="inline" />
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center justify-center shadow-md p-6 rounded-xl hover:scale-105 transition duration-150 ">
        <div>
          <img
            src="assets/images/wheelsworld.png"
            alt="project -demo"
            className="aspect-square object-cover max-w-[360px] rounded-xl mx-auto hover:cursor-pointer hover:scale-150 transition duration-200"
          />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold gap-4 items-center text-center">
            Wheels World 
            <BsCarFront className="text-3xl text-rose-600 inline ml-4" />
          </h2>
          <p className="my-6 text-sm md:text-base">
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
      </div>
    </div>
  );
};

export default ProjectCard;
