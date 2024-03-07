import { useState } from "react";
import FadeLeft from "../animations/FadeLeft";
import FadeRight from "../animations/FadeRight";
import { BuyWIthCardModal } from "../BuyWithCardModal";
import Ecosystem from "../../assets/svg/ecosystems.svg";
import HowToBuy from "../../assets/img/How-To-Buy.png";

const HowToBuySection = () => {
  const [isBuyWithCardModalOpen, setIsBuyWithCardModalOpen] = useState(false);

  const steps = [
    {
      title: "Connect Your Wallet",
      description:
        "Connect with your preferable crypto wallet, we offer options: MetaMask, Wallet Connect with more than 170+ wallets available!",
    },
    {
      title: "Choose payable token & chain",
      description:
        "You can participate on Flickrz pre-sale from Ethereum and Binance Smart Chain by using tokens like: BNB, ETH, USDT, USDC, BUSD and more.",
    },
    {
      title: "Receive tokens",
      description:
        "Flickrz tokens are locked in the smart contract after the purchase, tokens will be released at 2023 Q3-Q4, once v2 will be released.",
    },
  ];
  const steps1 = [
    {
      title: "Content Engagement",
      description:
        "Users earn FLKZ tokens by engaging with webtoons and digital content.",
    },
    {
      title: "In-App Purchases",
      description:
        "FLKZ tokens can be used to buy exclusive content, digital goods, and unlock premium features within the platform.",
    },
    {
      title: "NFT Marketplace",
      description:
        "Users can purchase, sell, or trade NFTs that represent digital content, such as webtoons, using FLKZ tokens.",
    },
    {
      title: "Governance",
      description:
        "Token holders can participate in governance decisions about the platform’s future through voting.",
    },
    {
      title: "Staking",
      description:
        "Users can stake FLKZ tokens to earn rewards and contribute to the platform’s security and governance.",
    },
    {
      title: "External Transactions",
      description:
        "FLKZ tokens can be transferred to external wallets and used for transactions outside the platform.",
    },
  ];
  return (
    
    <section  className="container py-12 lg:py-24">
       <h2 className="mb-6 text-center drop-shadow-lg text-3xl text-primary font-bold leading-normal lg:text-left lg:text-5xl">Ecosystem</h2>
     <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {steps1.map((step, index) => (
    <div
      key={index}
      className=" flex flex-col items-center gap-6 rounded-2xl bg-dark p-8 backdrop-blur-xl transition-all duration-200 hover:scale-105"
    >
      
      <div className="flex-1 text-center lg:text-left">
        <h4 className=" mb-4 text-xl font-medium">{step.title}</h4>
        <p >{step.description}</p>
      </div>
    </div>
  ))}
</div>
<img
            src={Ecosystem}
            alt="Integration"
            className="mx-auto w-full py-6 mb-6"
          />

      <div  id="how-to-buy" className="container flex flex-col items-center gap-8 px-4 lg:flex-row lg:gap-16 lg:px-0">
        <FadeLeft className="flex w-full flex-col gap-6 lg:w-1/2">
        <h2 className="mb-6 text-center drop-shadow-lg text-3xl text-primary font-bold leading-normal lg:text-left lg:text-5xl">
            How to buy
          </h2>
          {steps.map((step, index) => (
            <div
            key={index}
            className=" flex w-full flex-col items-center gap-6 rounded-2xl bg-dark p-8 backdrop-blur-xl transition-all duration-200 hover:scale-105 lg:flex-row"
          >
            
            <div className="flex-1 text-center lg:text-left">
              <h4 className=" mb-4 text-xl font-medium ">
                {step.title}
              </h4>
              <p >{step.description}</p>
            </div>
          </div>
          ))}
           <button
            onClick={() => setIsBuyWithCardModalOpen(true)}
            className="mx-auto text-center  items-center gap-3 rounded-lg bg-primary py-4 px-6 font-semibold  transition-opacity duration-200 hover:opacity-75 lg:mx-0"
          >
            Buy with Card
          </button>
        </FadeLeft>
        <FadeRight className="w-full lg:w-1/2 mt-14  border rounded-lg"  >
        <div className="mx-10 mb-10 ">
          <img src={HowToBuy}   alt="HowToBuy"
            className=" mx-auto w-52 mt-6  mb-6"/>
          <div className="mb-4 flex flex-col gap-4 text-center font-normal leading-relaxed text-white/80 lg:mb-8 lg:text-left lg:text-lg">
          <h2 className="mb-6 text-center drop-shadow-lg text-3xl  font-bold leading-normal  lg:text-5xl ">
        Refer a friend 
          </h2>
          <div>
          <p className="font-bold text-center">
  Refer a friend and you will receive a<br/> <span className="text-[#31d0a0]">10% USDT</span> from their investment!
</p>

  <ul className="list-disc">
    <li>
      <p>
        Refer a friend and you will receive a 10% USDT from their investment!
        In order to receive your bonus, your friend needs to purchase tokens
        worth of at least $10.
      </p>
    </li>
    <li>
      <p>
        Your bonus will be sent to you within 24 hours, to your crypto wallet
        that is related with your referral link.
      </p>
    </li>
  </ul>
</div>

          </div>
          <div className="flex justify-center">
 <button
            onClick={() => setIsBuyWithCardModalOpen(true)}
            className="mx-auto   items-center gap-3 rounded-lg  py-4 px-6 font-semibold border  transition-opacity duration-200 hover:opacity-75 lg:mx-0"
          >
            My <span className="text-primary">10% </span> Referral Link
          </button>  
          </div>     
          </div> 
        </FadeRight>
      </div>
      {isBuyWithCardModalOpen && (
        <BuyWIthCardModal closeModal={() => setIsBuyWithCardModalOpen(false)} />
      )}
    </section>
  );
};


export default HowToBuySection;
