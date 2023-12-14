import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";

import { Link } from "react-router-dom";

const Footer = () => {
    const date = new Date()
    return (
        <footer className="footer pt-10 px-[10%] bg-neutral text-neutral-content pb-24">
        <aside>
          <img src="/assets/images/logoABD.png" alt="logo" className="w-[20%]" />
          <p className="font-semibold text-lg">ABDULLAH IBNE ALI</p>
          <p>Copyright © {date.getFullYear()} - All right reserved</p>
        </aside> 
        <nav>
          <header className="footer-title">Social</header> 
          <div className="grid grid-flow-col gap-4 text-2xl text-primary">
          <Link
            to={"https://www.linkedin.com/in/abdullah-ibne-ali"}
            target="_blank"
          >
            <FiLinkedin className="transition duration-200 ease-in-out hover:scale-125 cursor-pointer" />
          </Link>
          <Link to={"https://github.com/abdnimit1203"} target="_blank">
            <RiGithubLine className="transition duration-200 ease-in-out hover:scale-125 cursor-pointer" />
          </Link>
          <Link to={"https://www.facebook.com/abd.nimit"} target="_blank">
            <SlSocialFacebook  className="transition duration-200 ease-in-out hover:scale-125 cursor-pointer" />
          </Link>
          </div>

        </nav>
        <div>
          <img src="https://lottie.host/embed/819d5503-fcac-4b6d-892d-e06ab484e60d/p5Qi5bZ9qz.json" alt="img" />
        </div>
      </footer>
    );
};

export default Footer;