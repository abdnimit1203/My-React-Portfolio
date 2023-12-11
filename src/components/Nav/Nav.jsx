import { GoHomeFill } from "react-icons/go";
import { MdContactMail } from "react-icons/md";
import { Link } from "react-scroll";
import { RiUserSettingsFill } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";
import { CgCodeSlash } from "react-icons/cg";

const Nav = () => {
  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <div className="flex text-slate-600 fixed items-center justify-center w-[90%] md:w-[80%] mx-auto bottom-6  z-10 ">
      <div className="flex items-center gap-2 bg-[#111111a9] py-2 backdrop-blur-sm text-white px-6 rounded-full ">
        <img src="assets/images/logoABD.png" alt="ABD Portfolio" width="40px" />
        <ul className="flex gap-6 font-semibold text-xl">
          <Link
            to="header"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
            className="text-2xl md:mx-2 hover:text-primary cursor-pointer"
          >
            <GoHomeFill />
          </Link>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
            className="text-2xl md:mx-2 hover:text-primary cursor-pointer"
          >
            <SiAboutdotme />
          </Link>
          <Link
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
            className="text-2xl md:mx-2 hover:text-primary cursor-pointer"
          >
            <RiUserSettingsFill />
          </Link>
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
            className="text-2xl md:mx-2 hover:text-primary cursor-pointer"
          >
            <CgCodeSlash />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
            className="text-2xl md:mx-2 hover:text-primary cursor-pointer"
          >
            <MdContactMail />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
