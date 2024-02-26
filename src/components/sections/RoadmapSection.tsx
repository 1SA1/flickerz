import FadeInBlur from "../animations/FadeInBlur";
import FadeUp from "../animations/FadeUp";
import RoadMap from "../../assets/img/road_map_bg.png";
import roadMap from "../../assets/svg/roadMap.svg";
import FadeLeft from "../animations/FadeLeft";

const RoadmapSection = () => {
  return (
    <section id="roadmap" className=" lg:py-8">
      <img src={roadMap} className="w-full" alt="Road Map" />
    </section>
  );
};

export default RoadmapSection;
