import { ReactComponent as ArrowToRightIcon } from "../../assets/svg/arrow-to-right.svg";
import TokenomicsImg from "../../assets/svg/tokenomics1.svg";
import EarnAndEnjoy from "../../assets/svg/EnjoyAndEarn.svg";
import HowItWorkIcon from "../../assets/svg/howitworksIcon.svg";
import HowItWorkIcon2 from "../../assets/svg/howitworksIcon2.svg";
import Icon1 from '../../assets/svg/icon1.svg';
import Icon2 from '../../assets/svg/icon2.svg';
import Icon3 from '../../assets/svg/icon3.svg';
import Icon4 from '../../assets/svg/icon4.svg';
import Works from "../../assets/svg/howItWorks.svg";
import Ecosystem from "../../assets/svg/Ecosystem.svg";
import Integration from "../../assets/svg/integration.svg";
import expansion from "../../assets/svg/expansion.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import FadeLeft from "../animations/FadeLeft";
import FadeRight from "../animations/FadeRight";
import BuyForm from "../BuyForm";
import BloomBerg from "../../assets/svg/BloomBerg.svg"
import MarketWatch from "../../assets/svg/MarketWatch.svg"
import DigitalJournal from "../../assets/svg/DigitalJournal.svg"
import NewSbtc from "../../assets/svg/newSbtc.svg"
import CryptoDaily from "../../assets/svg/CryptoDaily.svg"
import ApLogo from "../../assets/svg/APLogo1.svg"
import Benzinga from "../../assets/svg/Benzinga.svg"
import YahooFinance from "../../assets/svg/YahooFinanace.svg"

const HeaderSection = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container flex flex-col items-center gap-16 px-4 lg:flex-row lg:gap-4 lg:px-0">
        <FadeLeft className="w-full lg:w-1/2">
          <h2 className="mb-6 text-center drop-shadow-lg text-3xl font-bold leading-normal lg:text-left lg:text-5xl font-Outfit text-45 font-extrabold leading-58 tracking-normal text-left">
            "Enjoy and Earn"<br />
            <span className=" bg-clip-text ">The Future of Digital</span> Contents
          </h2>



          <p className="mb-8 text-center font-normal leading-relaxed text-white/80 lg:text-left lg:text-xl">
          We're thrilled to introduce the Flickrz "Enjoy and Earn" (E&E) Ecosystem, redefining how users engage with digital media. This concept revolutionizes user engagement by offering rewards for enjoying diverse digital content. At Flickrz, we believe in rewarding enjoyment, eliminating the need for users to go the extra mile for incentives.
          </p>
          <div className="flex items-center mb-10 justify-center gap-16 lg:justify-start mt-4">
      <a href="YOUR_INSTAGRAM_URL" target="_blank"> <FontAwesomeIcon icon={faFacebook} /></a>
      <a href="YOUR_TWITTER_URL" target="_blank"> <FontAwesomeIcon icon={faXTwitter} /></a>
      <a href="YOUR_FACEBOOK_URL" target="_blank">  <FontAwesomeIcon icon={faInstagram} /></a>
      <a href="YOUR_TELEGRAM_URL" target="_blank">    <FontAwesomeIcon icon={faTelegramPlane} /></a>
    </div>
          <div className="flex flex-wrap  items-center justify-center gap-4 lg:justify-start">
            <a
              href="https://tradeflickrz.com/"
              className="group flex items-center gap-1 rounded-lg bg-dark border border-white/100 py-4 px-6 text-sm font-semibold  transition-opacity duration-200 hover:opacity-75 lg:text-base"
            >
              <span>Open DAPP</span>
              <ArrowToRightIcon className="h-6 w-6 transition-all duration-300 group-hover:translate-x-2" />
            </a>
            <a
              href="https://flickrz.gitbook.io/whitepaper-flickrz/"
              target="_blank"
              className="group flex items-center gap-1 rounded-lg border border-white/100 bg-secondary py-4 px-6 text-sm font-semibold transition-opacity duration-200 hover:opacity-75 lg:text-base"
            >
              <span>Whitepaper</span>
              <ArrowToRightIcon className="h-6 w-6 transition-all duration-300 group-hover:translate-x-2" />
            </a>
          </div>
        </FadeLeft>

        <FadeRight className="relative flex w-full justify-center lg:w-1/2">
          <BuyForm />
        </FadeRight>

      </div>
      <div  className="relative flex my-6  overflow-x-hidden bg-dark">
  <div className="py-12 animate-marquee whitespace-nowrap">
    <span className="mx-4 inline-block"><img src={BloomBerg} alt="BloomBerg" className="h-7 w-32" /></span>
    <span className="mx-4 inline-block"><img src={MarketWatch} alt="MarketWatch" className="h-7 w-32" /></span>
    <span className="mx-4 inline-block"><img src={DigitalJournal} alt="DigitalJournal" className="h-7 w-32" /></span>
    <span className="mx-4 inline-block"><img src={NewSbtc} alt="NewSbtc" className="h-7 w-32" /></span>
    <span className="mx-4 inline-block"><img src={CryptoDaily} alt="CryptoDaily" className="h-7 w-32" /></span>
    <span className="mx-4 inline-block"><img src={ApLogo} alt="ApLogo" className="h-7 w-32" /></span>
    <span className="mx-4 inline-block"><img src={Benzinga} alt="Benzinga" className="h-7 w-32" /></span>
    <span className="mx-4 inline-block"><img src={YahooFinance} alt="YahooFinance" className="h-7 w-32" /></span>
  </div>
  <div className="absolute top-0  py-12 animate-marquee2 whitespace-nowrap" >
    <span className="mx-28 inline-block"><img src={BloomBerg} alt="BloomBerg" className="h-7 w-32" /></span>
    <span className="inline-block"><img src={MarketWatch} alt="MarketWatch" className="h-7 w-32" /></span>
    <span className="mx-4 inline-block"><img src={DigitalJournal} alt="DigitalJournal" className="h-7 w-32" /></span>
    <span className="mx-4 inline-block"><img src={NewSbtc} alt="NewSbtc" className="h-7 w-32" /></span>
    <span className="mx-4 inline-block"><img src={CryptoDaily} alt="CryptoDaily" className="h-7 w-32" /></span>
    <span className="mx-4 inline-block"><img src={ApLogo} alt="ApLogo" className="h-7 w-32" /></span>
    <span className="mx-4 inline-block"><img src={Benzinga} alt="Benzinga" className="h-7 w-32" /></span>
    <span className="mx-4 inline-block"><img src={YahooFinance} alt="YahooFinance" className="h-7 w-32" /></span>
  </div>
</div>

      <div className="container flex flex-col items-center py-6 gap-16 px-4 lg:flex-row lg:gap-4 lg:px-0">
        <FadeLeft className="w-full lg:w-1/2">

          <h2 className="mb-6 text-center text-primary drop-shadow-lg text-3xl font-bold leading-normal lg:text-left lg:text-5xl">ENJOY-AND-EARN</h2>
          

          <p className="mb-8 text-center font-normal leading-relaxed text-white/80 lg:text-left lg:text-xl">
          Flickrz introduces the "Enjoy and Earn" (E&E) ecosystem, revolutionizing digital media engagement.  <br></br>This unique approach rewards users for enjoying curated webtoons and digital content<br></br>reflecting our belief in intrinsic rewards for enjoyment.
          </p>
        </FadeLeft>

        <FadeRight className="relative flex w-full justify-center lg:w-1/2">
          <img
            src={EarnAndEnjoy}
            alt="EarnAndEnjoy"
            className="mx-auto w-full max-w-3xl"
          />
        </FadeRight>

      </div>

      <div className="container flex flex-col items-center gap-16 px-4 py-6 lg:flex-row lg:gap-4 lg:px-0">
        <FadeLeft className="relative flex w-full justify-center lg:w-1/2  ">
          <img
            src={Works}
            alt="How_it_works"
            className="mx-auto w-full max-w-3xl"
          />
        </FadeLeft>

        <FadeRight className="w-full lg:w-1/2">

          <h2 className="mb-6 text-center drop-shadow-lg text-3xl text-primary font-bold leading-normal lg:text-left lg:text-5xl">How It Works</h2>
          <p className="mb-8 text-center font-normal leading-relaxed text-white/80 lg:text-left lg:text-xl">
          Flickrz's E&E ecosystem lets users easily accumulate EP (Enjoyment Points) in their internal wallet while enjoying webtoons and digital content.<br></br>EP can be used to enhance NFT stats or exchange them for FLKZ Tokens, soon to be listed on global exchanges.<br></br>
          </p>
          
          <div className="flex items-center">
  <img src={HowItWorkIcon} alt="Upgrade Icon" className="h-6 w-6 mr-2" />
  <h3 style={{  fontSize: "20px", fontWeight: 800, lineHeight: "26px", letterSpacing: "0em", textAlign: "left" }}>UPGRADE NFT STATS</h3>

</div>
<p  className="mb-8 text-center font-normal leading-relaxed text-white/80 lg:text-left lg:text-xl">EPs can upgrade NFT stats. Upgraded stats improve earning performance.</p>



<ul className="mb-8 list-disc">
  <li className="flex items-center mb-2">
    <img src={Icon1} alt="Icon 1" className="h-6 w-6 mr-2" />
    Increases Earning Rate
  </li>
  <li className="flex items-center mb-2">
    <img src={Icon2} alt="Icon 2" className="h-6 w-6 mr-2" />
    Increases time efficiency for each content
  </li>
  <li className="flex items-center mb-2">
    <img src={Icon3} alt="Icon 3" className="h-6 w-6 mr-2" />
    Increases number of contents for E&E
  </li>
  <li className="flex items-center mb-2">
    <img src={Icon4} alt="Icon 4" className="h-6 w-6 mr-2" />
    Increases chance of receiving gift boxes
  </li>
</ul>

<div className="flex items-center">
  <img src={HowItWorkIcon2} alt="Upgrade Icon" className="h-6 w-6 mr-2" />
  <h3 style={{  fontSize: "20px", fontWeight: 800, lineHeight: "26px", letterSpacing: "0em", textAlign: "left" }}>SWAP: EP → FLKZ Token</h3>

</div>
<p  className="mb-8 text-center font-normal leading-relaxed text-white/80 lg:text-left lg:text-xl">These EP points can then be utilized to enhance NFT (Non-Fungible Token) statistics or exchanged for our platform's proprietary FLKZ Tokens.</p>

        </FadeRight>
      </div>

      <div className="container flex flex-col items-center gap-16 px-4 lg:flex-row lg:gap-4 lg:px-0">
        <FadeLeft className="w-full lg:w-1/2">

          <h2 className="mb-6 text-center drop-shadow-lg text-3xl text-primary font-bold leading-normal lg:text-left lg:text-5xl">FLKZ Tokens:</h2>
          <h2 className="mb-6 text-center drop-shadow-lg text-3xl font-bold leading-normal lg:text-left lg:text-4xl">The Heart of Our Ecosystem</h2>

          <p className="mb-8 text-center font-normal leading-relaxed text-white/80 lg:text-left lg:text-xl">
          FLKZ Tokens are the backbone of the Flickrz ecosystem, built on the BEP-20 standard. Flickrz empowers users to trade and optimize their rewards seamlessly. In the near future, we're excited to announce that FLKZ Tokens will be listed on global exchanges, providing users with even more flexibility in managing their rewards.
          </p>


          

          <div className="flex items-center">
  <img src={HowItWorkIcon} alt="Upgrade Icon" className="h-6 w-6 mr-2" />
  <h3 style={{  fontSize: "20px", fontWeight: 800, lineHeight: "26px", letterSpacing: "0em", textAlign: "left" }}>IN-APP CURRENCY</h3>

</div>
<p  className="mb-8 text-center font-normal leading-relaxed text-white/80 lg:text-left lg:text-xl">Buy NFT that has higher grade,<br />
More NFTs you have, the higher your earning ratio.</p>



<div className="flex items-center">
  <img src={HowItWorkIcon2} alt="Upgrade Icon" className="h-6 w-6 mr-2" />
  <h3 style={{  fontSize: "20px", fontWeight: 800, lineHeight: "26px", letterSpacing: "0em", textAlign: "left" }}>ON-CHAIN TRANSACTION</h3>

</div>
<p  className="mb-8 text-center font-normal leading-relaxed text-white/80 lg:text-left lg:text-xl">FLKZ Token is transferable to external wallet addresses</p>

        </FadeLeft>

        <FadeRight className="relative flex w-full justify-center lg:w-1/2">
          <img
            src={Ecosystem}
            alt="Ecosystem"
            className="mx-auto w-full max-w-3xl"
          />
        </FadeRight>

      </div>

      <div className="container flex flex-col items-center gap-16 px-4 lg:flex-row lg:gap-4 lg:px-0">
        <FadeLeft className="relative flex w-full justify-center lg:w-1/2">
          <img
            src={Integration}
            alt="Integration"
            className="mx-auto w-full max-w-3xl"
          />
        </FadeLeft>

        <FadeRight className="w-full lg:w-1/2">
        <h2 className="mb-6 text-center drop-shadow-lg text-3xl text-primary font-bold leading-normal lg:text-left lg:text-5xl">Exploring New Horizons: </h2>
          <h2 className="mb-6 text-center drop-shadow-lg text-3xl font-bold leading-normal lg:text-left lg:text-4xl">Fastmoving with the Market Shift</h2>
          
          
          <p className="mb-8 text-center font-normal leading-relaxed text-white/80 lg:text-left lg:text-xl">
          We believe the global webtoon market is in its early stages, holding significant growth potential. Content from webtoons and webnovels serves as the foundation for movies, Netflix, Disney series, and more. Our focus begins with webtoons, and we aim to broaden our reach across the entire digital content market by acquiring IPs of prominent webtoons and novels.<br></br>Flickrz sees this major shift in the digital content market as a significant opportunity. As an intermediary platform, we can connect existing web2 users, attract new web3 users, and provide a fresh business opportunity for traditional platforms seeking additional user traction.<br></br>
          </p>

        
        </FadeRight>
        
      </div>
      <img
            src={expansion}
            alt="Integration"
            className="mx-auto w-full max-w-3xl"
          />
      <div className="container flex flex-col items-center gap-16 px-4 lg:flex-row lg:gap-4 lg:px-0">
        <FadeLeft className="relative flex w-full justify-center lg:w-1/2">

        </FadeLeft>

        <FadeRight className="w-full lg:w-1/2">

        </FadeRight>
      </div>

    </section>
  );
};

export default HeaderSection;
