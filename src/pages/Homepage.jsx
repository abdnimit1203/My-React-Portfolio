import Aos from "aos";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

const Homepage = () => {
  Aos.init()
  return (
    <>
      <div className="w-[90%] md:w-[80%] mx-auto space-y-8 ">
        <Nav  />
        <Header />
      </div>
      <div className="w-[90%] md:w-[80%] mx-auto space-y-8  bg-white">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <div className="mt-10 md:mt-20">
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
