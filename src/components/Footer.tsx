import { ReactComponent as ArrowTrunDown } from "../assets/svg/arrow-turn-down.svg";
// import logo
import { ReactComponent as Logo } from "../assets/svg/logo.svg";
import { ReactComponent as TwitterIcon } from "../assets/svg/twitter.svg";
import { ReactComponent as TelegramIcon } from "../assets/svg/telegram.svg";
import { ReactComponent as MediumIcon } from "../assets/svg/medium.svg";
import { ReactComponent as FooterLogo } from "../assets/svg/footer_logo.svg";
const footerLinks = [
  {
    title: "General",
    links: [
      {
        name: "Official Links",
        href: "#",
      },
      {
        name: "Whitepaper",
        href: "https://flickrz.gitbook.io/whitepaper-flickrz/",
      },
      { name: "FAQ", href: "#" },
      {
        name: "How to buy?",
        href: "#",
      },
    ],
  },
  {
    title: "Social Links",
    links: [
      { name: "Telegram Channel (EN)", href: "http://t.me/flickrzpm" },
      { name: "Telegram Group (EN)", href: "http://t.me/flickrzpm" },
      { name: "Twitter", href: "https://twitter.com/FlickrzPM" },
      { name: "Discord", href: "https://discord.com/invite/93CjvsQv" },
    ],
  },
  {
    title: "Useful Links",
    links: [
      { name: "For Tipsters", href: "#" },
      { name: "For Buyers", href: "#" },
    ],
  },
];

const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/FlickrzPM",
    icon: <TwitterIcon className="h-6 w-6" />,
  },
  {
    name: "Telegram",
    href: "http://t.me/flickrzpm",
    icon: <TelegramIcon className="h-6 w-6" />,
  },
  // {
  //   name: "Google",
  //   href: "#",
  //   icon: <MediumIcon className="h-6 w-6" />,
  // },
];
const Footer = () => {
  return (
    <footer className=" backdrop-blur-xl">
     
      <div className="container">
     
        <div className="mb-2  gap-2 lg:mb-12 lg:grid-cols-3 lg:gap-32">
          <div className=" flex flex-col items-center gap-2 text-center lg:order-first lg:items-center lg:text-left">
            <FooterLogo className="h-24" />
            <p className="text-[#fff]  lg:text-md">
            COPYRIGHT 2024 GWDC Labs Ltd. ALL RIGHTS RESERVED
            </p>
           
            <div className="flex items-center gap-8 text-[#ffffff80]">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  className="transition-all duration-300 hover:text-white"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
      
        </div>
      
      </div>
    </footer>
  );
};

export default Footer;
