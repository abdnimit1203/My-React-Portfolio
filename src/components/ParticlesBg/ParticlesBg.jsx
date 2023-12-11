import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../config/particles-config";


const ParticlesBg = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
     params={particlesConfig}
   
    />
  );
};

export default ParticlesBg;
