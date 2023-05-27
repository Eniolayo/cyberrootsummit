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
          <div
            className="relative w-[270px] h-[210px] mx-auto cursor-pointer"
            key={item.sys.id}
            onClick={() => setfirstOpen(true)}
          >
            <Image
              src={"http://" + item.fields.file.url.slice(2)}
              alt={item.fields.title}
              fill
            />
          </div>
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
