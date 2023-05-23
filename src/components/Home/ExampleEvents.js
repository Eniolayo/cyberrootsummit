import ctl from "@netlify/classnames-template-literals";
import Link from "next/link";

export default function ExampleEvents() {
  return (
    <>
      <div className={gridEventWrapper}>
        {[
          "bg-summit-bg",
          "bg-demo-summit-bg1",
          "bg-demo-summit-bg2",
          "bg-demo-summit-bg3",
        ].map((item) => (
          <Link
            href="/events/1pTFVCZgEXLzdaeK22E5NE"
            className={`${item} rounded-md block overflow-hidden text-white bg-no-repeat bg-cover text-left py-10 px-5`}
            key={item}
          >
            <h5 className="uppercase font-bold text-2xl">cybersummit 2023</h5>
            <h6 className="text-lg">10-09-2023</h6>
            <p className="text-sm max-w-[280px] py-7">
              Small businesses are often targets for cyber-attacks because they
              are perceived as easy targets. A cybersecurity event designed for
              small business owners and employees can cover topics like risk
              management,
            </p>
            {/* <button className="border border-white text-base rounded-lg px-2 py-1">
              Register for free
            </button> */}
          </Link>
        ))}
      </div>
    </>
  );
}
const gridEventWrapper = ctl(`
  grid 
  gap-5 
  lg:gap-10 
  grid-cols-7 
  
  [&>*:nth-child(4n+1)]:col-span-full 
  [&>*:nth-child(4n+4)]:col-span-full 

  md:[&>*:nth-child(4n+1)]:col-span-3 
  md:[&>*:nth-child(4n+4)]:col-span-3 
  
  [&>*:nth-child(4n+2)]:col-span-full 
  [&>*:nth-child(4n+3)]:col-span-full
  
  md:[&>*:nth-child(4n+2)]:col-span-4 
  md:[&>*:nth-child(4n+3)]:col-span-4
`);
