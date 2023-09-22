import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

import { Heading } from "./ui";

export default function Footer() {
  return (
    <footer>
      <div className="flex gap-10 flex-wrap lg:justify-between flex-col md:flex-row items-start py-10 w-[92%] max-w-[1500px] mx-auto">
        <Link href="https://www.cyberrootltd.com/">
          <Image
            src="/CyberRoot Logo.png"
            alt="cyberroot Icon"
            width={200}
            height={49}
            style={{ cursor: "pointer" }}
          />
        </Link>
        <AboutUsSection />
        <NewsAndEvents />
        <ContactAndLegal />
        <CyberrootOffice />
        <FollowLinks />
      </div>
    </footer>
  );

  function CyberrootOffice() {
    return (
      <section>
        <Heading
          level={"h4"}
          styles={"text-brightNavyBlue uppercase underline mb-3"}
        >
          Cyberroot Office
        </Heading>
        <ul>
          <li className="underline mb-1 max-w-[210px]">
            <Link href={HOME}>
              Adamolekun Estate, Adebayo Old Takeaway, 360102, Ado Ekiti, Ekiti
            </Link>
          </li>
        </ul>
      </section>
    );
  }

  function FollowLinks() {
    return (
      <section>
        <Heading
          level={"h4"}
          styles={"text-brightNavyBlue uppercase underline mb-3"}
        >
          follow us on
        </Heading>
        <ul className="flex gap-1">
          {[
            {
              icon: "ic:sharp-facebook",
              link: "https://web.facebook.com/CyberrootNg/?_rdc=1&_rdr",
            },
            {
              icon: "ph:instagram-logo-fill",
              link: "https://www.instagram.com/cyberrootltd/?hl=en",
            },
            {
              icon: "mdi:twitter",
              link: "https://twitter.com/cyberrootltd?lang=en",
            },
            {
              icon: "ph:youtube-logo-fill",
              link: "https://www.youtube.com/@cyberrootltd",
            },
          ].map((item) => (
            <li key={item}>
              <Link href={HOME}>
                <Icon icon={item.icon} color="#146BDF" fontSize={"30px"} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  function ContactAndLegal() {
    return (
      <section>
        <Heading
          level={"h4"}
          styles={"text-brightNavyBlue uppercase underline mb-3"}
        >
          Contact and Legal
        </Heading>

        <ul>
          {["Privacy Policy", "Terms and Conditions"].map((item) => (
            <li key={item}>
              <Link href={HOME} className="underline mb-1">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  function AboutUsSection() {
    return (
      <section>
        <Heading
          level={"h4"}
          styles={"text-brightNavyBlue uppercase underline mb-3"}
        >
          about us
        </Heading>
        <ul>
          {AboutUs.map((item) => (
            <li key={item.name}>
              <Link className="underline mb-1" href={item.link} target="_blank">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  function NewsAndEvents() {
    return (
      <section>
        <Heading
          level={"h4"}
          styles={"text-brightNavyBlue uppercase underline mb-3"}
        >
          News and Events
        </Heading>
        <ul>
          {[
            { name: "Blog", link: BLOG },
            { name: "Events", link: CYBERROOTSUMMIT },
          ].map((item) => (
            <li key={item.name}>
              <Link href={item.link} className="underline mb-1" target="_blank">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
const AboutUs = [
  { name: "Home", link: "cyberrootltd.com/" },
  { name: "About Us", link: "cyberrootltd.com/about-us" },
  { name: "Services", link: "cyberrootltd.com/services/threat-assessment" },
];
