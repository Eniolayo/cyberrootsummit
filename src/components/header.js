import ctl from "@netlify/classnames-template-literals";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className={HeaderStyle}>
      <Head>
        <title>Cyberroot</title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/duakn882p/image/upload/v1685193749/favicon_pfphf0.ico"
        />
        <meta property="og:title" content="CyberRoot || Cyber summit" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:site_name"
          content="Cyber summit || Social Engineering Awareness"
        />
        <meta property="og:url" content="https://cyberrootsummit.vercel.app" />
        <meta
          property="og:description"
          content="Welcome to our Summit Event page! Discover a world of knowledge, inspiration, and networking opportunities as we bring together industry leaders, innovators, and visionaries at our Summit."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/duakn882p/image/upload/v1685193749/favicon_pfphf0.ico"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="article" />
        <meta property="article:section" content="Summit Event page" />

        <meta property="twitter:card" content="Cyber summit" />
        <meta property="twitter:title" content="Social Engineering Awareness" />
        <meta
          property="twitter:description"
          content="Welcome to our Summit Event page! Discover a world of knowledge, inspiration, and networking opportunities as we bring together industry leaders, innovators, and visionaries at our Summit."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/duakn882p/image/upload/v1685193827/cyberrootIcon_1_ksnfya.png"
        />
        <meta
          property="twitter:url"
          content="https://cyberrootsummit.vercel.app"
        />
      </Head>
      <div className={HeaderWrapperStyle}>
        <Link href="/">
          <Image
            src="/CyberRoot Logo.png"
            alt="cyberroot Icon"
            width={200}
            height={49}
          />
        </Link>
        <div className={HeaderLinkStyle(isOpen)}>
          <ul className={HeaderWrapperLinkStyle}>
            {[
              { name: "training", url: "/training" },
              { name: "blog", url: "https://www.cyberrootltd.com/blog" },
              { name: "gallery", url: "/gallery" },
            ].map((item) => (
              <li
                className="text-base m:text-lg lg:text-xl text-white m:text-black capitalize"
                key={item.name}
              >
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <Link
            href={"/contact-us"}
            className="mt-5 m:mt-0 px-8 py-3 text-base m:text-lg lg:text-xl block w-fit bg-brightNavyBlue text-white rounded-m"
          >
            Contact Us
          </Link>
        </div>
        <button
          className={HamburgerButtonStyle}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={FirstStrokeStyle(isOpen)} />
          <span className={SecondStrokeStyle(isOpen)} />
          <span className={ThirdStrokeStyle(isOpen)} />
        </button>
      </div>
    </header>
  );
}

function FirstStrokeStyle(isOpen) {
  return ctl(`
      ${genericHamburgerLine} 
      ${
        isOpen
          ? `
            rotate-45 
            translate-y-3 
            group-hover:opacity-100
            `
          : `group-hover:opacity-100`
      }
  `);
}
function SecondStrokeStyle(isOpen) {
  return ctl(`
      ${genericHamburgerLine} 
      ${isOpen ? "opacity-0" : "group-hover:opacity-100"}
  `);
}
function ThirdStrokeStyle(isOpen) {
  return ctl(`
      ${genericHamburgerLine} 
      ${
        isOpen
          ? `
            -rotate-45 
            -translate-y-3 
            group-hover:opacity-100
          `
          : `group-hover:opacity-100`
      }
  `);
}
const HeaderStyle = ctl(`
  border-b 
  border-cornflowerBlue 
  relative
`);

const HeaderWrapperStyle = ctl(`
  flex 
  items-center 
  justify-between 
  max-w-[1500px] 
  w-[92%] 
  mx-auto 
  py-6
`);

function HeaderLinkStyle(isOpen) {
  return ctl(`
        w-[100%] 
        inset-x-0 
        m:w-[70%] 
        lg:w-[65%] 
        absolute 
        top-full 
        p-8 
        m:p-0 
        bg-cornflowerBlue 
        m:bg-transparent 
        m:flex 
        m:relative 
        justify-between 
        z-50 
        ${isOpen ? "scale-y-100" : "scale-y-0"} 
        m:scale-100 
        origin-top 
        transition-all 
        duration-300
      `);
}

const HeaderWrapperLinkStyle = ctl(`
  flex 
  flex-col 
  m:flex-row 
  items-start 
  m:items-center 
  w-[40%] 
  gap-5 
  justify-between 
`);

const genericHamburgerLine = ctl(`
  h-1 
  w-6 
  my-1 
  rounded-full 
  bg-gray 
  transition 
  ease 
  transform 
  duration-300
`);

const HamburgerButtonStyle = ctl(`
  flex 
  flex-col 
  h-11 
  w-11 
  border-2 
  rounded 
  justify-center 
  items-center 
  group 
  m:hidden
`);
