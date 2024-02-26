import TokenomicsImg from "../../assets/svg/tokenNomics.svg";
import FadeLeft from "../animations/FadeLeft";
import FadeRight from "../animations/FadeRight";
const TokenomicsSection = () => {
  return (
  <section id="tokenomics" className=" py-12 lg:py-24">
    <img
        src={TokenomicsImg}
        alt="Tokenomics"
        className="w-full"
      />
</section>

  );
};
export default TokenomicsSection;