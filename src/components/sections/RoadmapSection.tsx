import FadeInBlur from "../animations/FadeInBlur";
import FadeUp from "../animations/FadeUp";
import RoadMap from "../../assets/img/road_map_bg.png";
import roadMap from "../../assets/svg/roadMap.svg";
import FadeLeft from "../animations/FadeLeft";

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="container lg:py-8">
        <h2 className="mb-6 text-center text-primary drop-shadow-lg text-3xl font-bold leading-normal lg:text-left lg:text-5xl">Roadmap</h2>
      <img src={roadMap} className="w-full" alt="Road Map" />
    </section>
  );
};

export default RoadmapSection;
