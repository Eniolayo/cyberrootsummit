import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer>
      <div className="flex gap-10 items-start py-10 w-[92%] max-w-[1500px] mx-auto">
        <Image
          src="/CyberRoot Logo.png"
          alt="cyberroot Icon"
          width={200}
          height={49}
          style={{ cursor: "pointer" }}
        />
        <div className="">
          <h4 className="uppercase text-brightNavyBlue underline mb-3">
            about us
          </h4>
          <ul>
            {["Home", "About Us", "Services", "Industries"].map((item) => (
              <li key={item} className="underline mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h4 className="uppercase text-brightNavyBlue underline mb-3">
            Solutions
          </h4>
          <ul>
            {["Solutions", "Case Studies", "Resources", "FAQs"].map((item) => (
              <li key={item} className="underline mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h4 className="uppercase text-brightNavyBlue underline mb-3">
            News and Events
          </h4>
          <ul>
            {["Blog", "News", "Events"].map((item) => (
              <li key={item} className="underline mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h4 className="uppercase text-brightNavyBlue underline mb-3">
            Contact and Legal
          </h4>
          <ul>
            {[
              "Careers",
              "Partners",
              "Testimonials",
              "Privacy Policy",
              "Terms and Conditions",
              "Site Map",
              "Accessibility",
              "Social Media",
            ].map((item) => (
              <li key={item} className="underline mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h4 className="uppercase text-brightNavyBlue underline mb-3">
            Cyberroot Office
          </h4>
          <ul>
            {[
              "Adamolekun Estate, Adebayo Old Takeaway, 360102, Ado Ekiti, Ekiti",
            ].map((item) => (
              <li key={item} className="underline mb-1 max-w-[210px]">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h4 className="uppercase text-brightNavyBlue underline mb-3">
            follow us on
          </h4>
          <ul className="flex">
            {[
              "ic:sharp-facebook",
              "mdi:twitter",
              "ph:instagram-logo-fill",
              "ph:youtube-logo-fill",
            ].map((item) => (
              <li key={item}>
                <Icon icon={item} color="#146BDF" fontSize={"30px"} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
