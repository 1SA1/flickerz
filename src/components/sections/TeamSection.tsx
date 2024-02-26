import { ReactComponent as TwitterIcon } from "../../assets/svg/twitter.svg";
import { ReactComponent as TelegramIcon } from "../../assets/svg/telegram.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/svg/linkedin.svg";
import Michelle from "../../assets/img/CEO_Michelle.png";
import Mark from "../../assets/img/Co-Founder_Mark.png";
import Ben from "../../assets/img/Co-Founder_Ben.png";
import Travis from "../../assets/img/CTO_Travis.png";
import Ray from "../../assets/img/CMO_Ray.png";
import FadeUp from "../animations/FadeUp";
import FadeLeft from "../animations/FadeLeft";

const TeamSection = () => {
  const team = [
    {
      name: "Steve",
      role: "Founder & Investor",
      img: Michelle,
      linkedin: undefined,
      twitter: undefined,
      telegram: "https://t.me/",
    },
    {
      name: "Ben",
      role: "Co-Founder",
      img: Ben,
      linkedin: undefined,
      twitter: undefined,
      telegram: "https://t.me/",
    },
    {
      name: "Mark",
      role: "Co-Founder",
      img: Mark,
      linkedin: undefined,
      twitter: undefined,
      telegram: "https://t.me",
    },
    {
      name: "Michelle",
      role: "CEO",
      img: Michelle,
      linkedin: undefined,
      twitter: undefined,
      telegram: "https://t.me/",
    },
    {
      name: "Travis",
      role: "CTO",
      img: Travis,
      linkedin: undefined,
      twitter: undefined,
      telegram: "https://t.me/",
    },
    {
      name: "Ray",
      role: "CMO",
      img: Ray,
      linkedin: undefined,
      twitter: undefined,
      telegram: "https://t.me/",
    },
  ];
  return (
    <section id="main-site" className="pb-12 lg:pb-24">
      <div className="container px-4 lg:px-0">
        <FadeLeft>
          <h2 className="text-gradient mb-6 text-center text-5xl leading-normal lg:mb-12 lg:text-left">
            Team
          </h2>
        </FadeLeft>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((item, i) => (
            <FadeUp delay={i * 0.7} key={i}>
              <div className="group flex flex-col items-center justify-center rounded-2xl border-2 border-white/20 bg-[#14181C]/30 backdrop-blur-3xl transition-all duration-200 hover:scale-105 hover:border-[#3e1f5e]">
                <div className="py-10 px-6 text-center">
                  <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full bg-white/10">
                    {item.img && (
                      <img
                        src={item.img}
                        alt={item.name}
                        className="h-auto max-w-full"
                      />
                    )}
                  </div>
                  <h4 className="mb-1 text-2xl font-semibold">{item.name}</h4>
                  <p className="text-lg text-[#3D3F4F]">{item.role}</p>
                </div>
                <div className="h-px w-full bg-white/20 transition-all duration-200 group-hover:bg-[#3e1f5e]"></div>
                <div className="flex justify-center gap-4 px-6 py-4 text-white/20">
                  {item.linkedin && (
                    <a
                      href={item.linkedin}
                      target="_blank"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#3D3F4F]/40 transition-all duration-200 hover:bg-primary hover:text-black/70"
                    >
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                  )}
                  {item.twitter && (
                    <a
                      href={item.twitter}
                      target="_blank"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#3D3F4F]/40 transition-all duration-200 hover:bg-primary hover:text-black/70"
                    >
                      <TwitterIcon className="h-5 w-5" />
                    </a>
                  )}
                  {item.telegram && (
                    <a
                      href={item.telegram}
                      target="_blank"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#3D3F4F]/40 transition-all duration-200 hover:bg-primary hover:text-black/70"
                    >
                      <TelegramIcon className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
