import Contact from "../components/Contact/Contact";
import Education from "../components/Education/Education";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

const Homepage = () => {
    return (
        <div className="w-[90%] md:w-[80%] mx-auto">
            <Nav/>
            <Header/>
            <Education/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Homepage;