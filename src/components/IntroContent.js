import Image from "next/image";
import ctl from "@netlify/classnames-template-literals";

export default function IntroContent() {
  return (
    <section className="bg-summit-gallery-bg bg-cover bg-no-repeat py-5 h-[80vh]">
      <div className="grid items-center h-full text-white content-center gap-5 [&>*]:mx-auto [&>*]:text-center">
        <h2 className={mainSectionTextStyle}>gallery</h2>
        <p className="max-w-[700px] text-xl">
          Welcome to our Event Gallery page! Browse through photos and videos of
          our immersive and engaging events, featuring unique themes,
          high-quality entertainment, and delicious food and drinks
        </p>
      </div>
    </section>
  );
}
const mainSectionTextStyle = ctl(`
  text-7xl
  font-black
  capitalize
`);
