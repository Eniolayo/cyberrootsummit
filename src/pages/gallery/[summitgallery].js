import ctl from "@netlify/classnames-template-literals";
import Image from "next/image";
import React from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Modal from "@/components/modal";
import { Heading, Text } from "@/components/ui";
const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_SPACE,
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
  accessToken: process.env.NEXT_PUBLIC_ACCESSTOKEN,
});

export default function Summitgallery({ postRes }) {
  const [firstOpen, setfirstOpen] = React.useState(false);
  console.log(postRes);
  const eventDate = new Date(postRes.fields.dateAndTime);

  const dateFormatter = new Intl.DateTimeFormat("en-US", { dateStyle: "full" });

  return (
    <div>
      <Header />
      <section className="bg-summit-gallery-bg bg-cover bg-no-repeat bg-center py-5 h-[30vh]">
        <div className="grid items-center h-full text-white content-center gap-5 [&>*]:mx-auto [&>*]:text-center">
          <h2 className={mainSectionTextStyle}>gallery</h2>
        </div>
      </section>
      <section className="text-center max-w-[1500px] w-[92%] mx-auto py-8 space-y-3">
        <Heading level={"h3"} variant={"3xl"} styles={"font-black capitalize"}>
          {postRes.fields.eventName}
        </Heading>
        <h5 className="text-xl text-gray">{dateFormatter.format(eventDate)}</h5>
        <Text styles="capitalize" variant={"m"}>
          Welcome to our {postRes.fields.eventName} Gallery page! Browse our
          gallery of exciting photos and videos featuring expert keynote
          speakers, engaging panel discussions, workshops, and networking
          sessions connecting professionals in their field.
        </Text>
      </section>
      <section className={galleryDisplayStyle}>
        {postRes.fields.summitPhotos.map((item) => (
          <BlurryImage
            item={item}
            key={item.sys.id}
            setfirstOpen={setfirstOpen}
          />
        ))}
      </section>
      <Footer />
      <Modal
        onClose={() => setfirstOpen(false)}
        isOpen={firstOpen}
        images={postRes.fields.summitPhotos}
      />
    </div>
  );
}
const mainSectionTextStyle = ctl(`
  text-7xl
  font-black
  capitalize
`);
const galleryDisplayStyle = ctl(`
  w-[92%] 
  max-w-[1500px] 
  mx-auto 
  py-12 
  grid 
  justify-between 
  grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] 
  gap-5
`);
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function BlurryImage({ item, setfirstOpen }) {
  const [isLoading, setLoading] = React.useState(true);
  return (
    <div
      className="relative w-[270px] h-[210px] mx-auto cursor-pointer"
      onClick={() => setfirstOpen(true)}
    >
      <Image
        src={"http://" + item.fields.file.url.slice(2)}
        alt={item.fields.title}
        fill
        style={{
          objectFit: "cover",
        }}
        className={cn(
          "duration-700 ease-in-out group-hover:opacity-75",
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "summit",
  });
  const posts = await res.items;

  const paths = posts.map((item) => {
    return {
      params: { summitgallery: `${item.sys.id}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const currentUrl = params.summitgallery;

  const postRes = await client.getEntry(currentUrl);
  return {
    props: { postRes },
  };
}
/* 

        placeholder="blur"
        blurDataURL="data:image/png;base64,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"
*/
