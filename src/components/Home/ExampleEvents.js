import ctl from "@netlify/classnames-template-literals";
import Link from "next/link";

export default function EventsSample({ data, finished }) {
  return (
    <div className={gridEventWrapper}>
      {data.map((item, index) => (
        <Link
          href={`/events/${item.sys.id}`}
          className={`${
            bgImages(finished)[index]
          } rounded-md block overflow-hidden text-white bg-no-repeat bg-cover text-left py-10 px-5`}
          key={bgImages(finished)[index]}
        >
          <h5 className="uppercase font-bold text-2xl">
            {item.fields.eventName}
          </h5>
          <h6 className="text-lg">10-09-2023</h6>
          <p className="text-sm max-w-[280px] py-7">
            {item.fields.description.slice(0, 200)}
            {item.fields.description.length > 200 ? "..." : ""}
          </p>
          {/* <button className="border border-white text-base rounded-lg px-2 py-1">
              Register for free
            </button> */}
        </Link>
      ))}
    </div>
  );
}
const bgCover = [
  "bg-summit-bg",
  "bg-demo-summit-bg1",
  "bg-demo-summit-bg2",
  "bg-demo-summit-bg3",
];

const bgImages = (finished) => (finished ? bgCover : bgCover.reverse());

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
