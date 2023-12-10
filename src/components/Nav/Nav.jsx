const Nav = () => {
  return (
    <div className="flex text-slate-600 fixed items-center justify-center w-[90%] md:w-[80%] mx-auto bottom-6  z-10 ">
      <div className="flex items-center gap-2 bg-[#111111a9] py-2 backdrop-blur-sm text-white px-6 rounded-full ">
        <img src="assets/images/logoABD.png" alt="ABD Portfolio" width="40px" />
        <ul className="flex gap-6 font-semibold">
          <li>Home</li>
          <li>Education</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
