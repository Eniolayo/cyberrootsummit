import Image from "next/image";
import ctl from "@netlify/classnames-template-literals";

export default function IntroContent() {
  // cyber-summit-bg.png
  return (
    <section className="bg-cyber-summit-bg bg-cover bg-no-repeat py-5 h-[80vh]">
      <div className="grid items-center h-full text-white content-center gap-5 [&>*]:mx-auto [&>*]:text-center">
        <h2 className={mainSectionTextStyle}>Cyber summit</h2>
        <h5 className="capitalize font-medium text-2xl">
          Social Engineering Awareness
        </h5>
        <p className="max-w-[700px] text-xl">
          Small businesses are often targets for cyber-attacks because they are
          perceived as easy targets. A cybersecurity event desig...
        </p>
        <button className="px-12 py-3 capitalize rounded-m text-xl bg-brightNavyBlue text-white block">
          watch summit
        </button>
      </div>
    </section>
  );
}
const mainSectionTextStyle = ctl(`
  text-7xl
  font-black
  capitalize
`);
