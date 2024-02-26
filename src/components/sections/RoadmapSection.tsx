import FadeInBlur from "../animations/FadeInBlur";
import FadeUp from "../animations/FadeUp";
import RoadMap from "../../assets/img/road_map_bg.png";
const roadmap = [
  {
    year: [2023,2034,2025],
    steps: [
      "PC servicelaunching","Mobile appservice launching","Service for aggregated digital streaming contents"
     ]
  },
  {
    
    steps: [
      "Enjoy & Earn with top-class webtoons","In-house content creation webtoon, novels, & educational contents Expand partnerships with big content providers","IP-based movies, drama series, e-book, music, & other streaming services"
     ]
  },
  {
    steps: [
      "Enjoy & Earn ecosystem build Internal wallet build & integration","Exchange listing Exchange listing Staking launching Digital content creator DAO setup","Enjoy & Earn service area expansion for various content fields"
     ]
  }
  
];
const RoadmapSection = () => {
  return (
    <section id="roadmap" className="lg:py-8">
      <div className="mx-4 rounded-3xl border-2 border-white/20 bg-[#14181C]/30 py-8 backdrop-blur-2xl transition-all duration-200 hover:border-[#3e1f5e] lg:py-16">
        <div className="container px-4 lg:px-0">
          <div className="mb-6">
            <h2 className="text-gradient text-primary font-bold sticky mb-4 text-center text-5xl leading-normal lg:text-left">
              Roadmap
            </h2>
          </div>
          <div className="px-2 pt-20" style={{ backgroundImage: `url(${RoadMap})`, backgroundSize: '20%', backgroundPosition: 'top left', backgroundRepeat: 'no-repeat' }}>
            {/* <div className="relative mb-12 h-2.5 w-full bg-gradient-to-r from-white to-white/0"></div> */}

        
              {roadmap.map((item, index) => (
                <div>
                  
                  <FadeUp delay={0.7 * index}  >
                  <h2 className="text-center mb-4 text-primary font-bold text-3xl ">{item.year}</h2>
                    <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {item.steps.map((step, index) => (
                         
                        <div
                        
                          key={index}
                          className=" flex flex-col items-center gap-6 rounded-2xl bg-dark p-8 backdrop-blur-xl transition-all duration-200 hover:scale-105"
                        >

                          <div className="flex-1 text-center lg:text-left">

                            <p >{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                  </FadeUp>
                </div>
              ))}
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
