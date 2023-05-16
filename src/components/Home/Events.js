export default function Events() {
  return (
    <section className="text-center w-[92%] max-w-[1500px] mx-auto space-y-3">
      <h3 className="text-3xl font-black text-brightNavyBlue">Events</h3>
      <p>Discover upcoming events and conferences in Cyberroot</p>
      <div className="flex gap-3 justify-center">
        {["Webinars", "Workshops", "Seminars", "Conferences"].map((item) => (
          <button
            className="bg-lightSilver rounded-full px-6 py-3 text-lg uppercase"
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex py-10 justify-center gap-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            className="bg-summit-bg max-w-[315px] rounded-md overflow-hidden text-white bg-no-repeat bg-cover text-left p-5"
            key={i}
          >
            <h5 className="uppercase font-bold text-lg">cybersummit 2023</h5>
            <h6>10-09-2023</h6>
            <p className="text-xs max-w-[230px] py-7">
              Small businesses are often targets for cyber-attacks because they
              are perceived as easy targets. A cybersecurity event designed for
              small business owners and employees can cover topics like risk
              management,
            </p>
            <button className="border border-white text-sm rounded-lg px-2 py-1">
              Register for free
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
