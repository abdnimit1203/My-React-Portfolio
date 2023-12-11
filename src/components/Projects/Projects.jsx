import ProjectCard from "../Cards/ProjectCard";
import HeaderText from "../HeaderText/HeaderText";

const Projects = () => {
    return (
        <div id="projects">
           <HeaderText text1={"View my"} text2={"Projects"}/>
           <div>
            <h3 className="text-lg font-bold text-accent">PORTFOLIO</h3>
            <h2 className="font-bold text-2xl my-2">Each project is unique piece of developement 👨🏻‍💻</h2>
            <p>/Also user login based projects</p>
           </div>
           <div>
            <ProjectCard/>
           </div>
        </div>
    );
};

export default Projects;