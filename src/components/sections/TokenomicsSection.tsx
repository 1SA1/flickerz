import TokenomicsImg from "../../assets/svg/tokenomics1.svg";
import FadeLeft from "../animations/FadeLeft";
import FadeRight from "../animations/FadeRight";
const TokenomicsSection = () => {
  return (
  <section id="tokenomics" className="container py-12 lg:py-24">
     <h2 className="text-text mb-12  text-primary font-bold text-3xl  leading-normal lg:mb-24 lg:text-5xl">
          Tokenomics
        </h2>
  <div className="flex flex-col items-center gap-20 lg:flex-row">
    {/* <FadeLeft className="order-last w-full lg:order-first lg:w-1/2">
      <img
        src={TokenomicsImg}
        alt="Tokenomics"
        className="mx-auto w-full max-w-xl"
      />
    </FadeLeft> */}

    <FadeRight className="flex w-full items-center justify-center lg:w-1/2">
      <div className="flex flex-col w-full lg:w-3/4 items-center lg:items-start justify-center">
      </div>
    </FadeRight>
  </div>
  <div className="container flex flex-col items-center gap-16 px-4 lg:flex-row lg:gap-4 lg:px-0">
        <FadeLeft className="relative flex w-full justify-center lg:w-1/2">
        <img
        src={TokenomicsImg}
        alt="Tokenomics"
        className="mx-auto w-full max-w-xl"
      />
        </FadeLeft>

        <FadeRight className="w-full lg:w-1/2">
        <div className="flex flex-col w-full lg:w-3/4 items-center lg:items-start justify-center">
       
        <table className="table-auto  border-collapse w-full rounded-lg">
  <thead className="bg-[#000] ">
    <tr>
      <th className="border px-4 py-2 rounded-tl-lg">Types</th>
      <th className="border px-4 py-2 ">%</th>
      <th className="border px-4 py-2">Tokens</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border  px-4 py-2 bg-dark">Community Incentives</td>
      <td className="border px-4 py-2 bg-[#3f3f3f]">45%</td>
      <td className="border px-4 py-2 bg-[#3f3f3f]">450,000,000</td>
    </tr>
    <tr>
      <td className="border px-4 py-2 bg-dark">Ecosystem Support</td>
      <td className="border px-4 py-2 bg-[#3f3f3f]">10%</td>
      <td className="border px-4 py-2 bg-[#3f3f3f]">100,000,000</td>
    </tr>
    <tr>
      <td className="border px-4 py-2 bg-dark">Strategic Investments</td>
      <td className="border px-4 py-2 bg-[#3f3f3f]">15%</td>
      <td className="border px-4 py-2 bg-[#3f3f3f]">150,000,000</td>
    </tr>
    <tr>
      <td className="border px-4 py-2 bg-dark">Reserve Fund</td>
      <td className="border px-4 py-2 bg-[#3f3f3f]">15%</td>
      <td className="border px-4 py-2 bg-[#3f3f3f]">150,000,000</td>
    </tr>
    <tr>
      <td className="border px-4 py-2 bg-dark">Team and Advisors</td>
      <td className="border px-4 py-2 bg-[#3f3f3f]">5%</td>
      <td className="border px-4 py-2 bg-[#3f3f3f]">50,000,000</td>
    </tr>
    <tr>
      <td className="border px-4 py-2 bg-dark">Marketing Incentive</td>
      <td className="border px-4 py-2 bg-[#3f3f3f]">10%</td>
      <td className="border px-4 py-2 bg-[#3f3f3f]">100,000,000</td>
    </tr>
    <tr>
      
      <td className="border px-4 py-2 font-medium bg-[#FF6160] ">Total</td>
      <td className="border px-4 py-2 font-medium bg-[#FF706E]">100%</td>
      <td className="border px-4 py-2 font-medium bg-[#FF706E]">1,000,000,000</td>
    </tr>
  </tbody>
</table>


      </div>
        </FadeRight>
      </div>

</section>

  );
};
export default TokenomicsSection;