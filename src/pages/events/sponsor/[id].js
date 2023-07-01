import ctl from "@netlify/classnames-template-literals";
import React from "react";
const contentful = require("contentful");

import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button, Heading, Text } from "@/components/ui";

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_SPACE,
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
  accessToken: process.env.NEXT_PUBLIC_ACCESSTOKEN,
});

export default function SponsorId({ postRes }) {
  // console.log(postRes, "postRes");
  return (
    <div>
      <Header />
      <section className="max-w-[930px] w-[95%] mx-auto py-20">
        <div className="bg-gradient-to-br from-[#146BDF] from-36.2% to-[#002F6D] grid justify-end [&>*]:text-right p-10 space-y-2 text-white">
          <Heading level={"h2"} variant={"m"}>
            {postRes.fields.eventName}
          </Heading>
          <Text styles={"capitalize"} variant={"sm"}>
            {postRes.fields.dateAndTime.slice(0, 10)}
          </Text>
          <Heading level={"h4"}>{postRes.fields.location}</Heading>
        </div>
        <div className="p-10 s:p-20 m:p-32 bg-ghostWhite">
          <form className="space-y-5">
            <div className="space-y-1">
              <label htmlFor="first name" className="block text-brightNavyBlue">
                First Name
              </label>
              <input type="text" className={inputStyles} />
            </div>
            <div className="space-y-1">
              <label htmlFor="last name" className="block text-brightNavyBlue">
                Last Name
              </label>
              <input type="text" className={inputStyles} />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="email address"
                className="block text-brightNavyBlue"
              >
                Email Address
              </label>
              <input type="email" className={inputStyles} />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="phone number"
                className="block text-brightNavyBlue"
              >
                Phone Number
              </label>
              <input type="text" className={inputStyles} />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="company name"
                className="block text-brightNavyBlue"
              >
                Company Name
              </label>
              <input type="text" className={inputStyles} />
            </div>
            <Button
              style={"px-8 bg-brightNavyBlue text-white py-2 rounded-full"}
            >
              Submit
            </Button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
const inputStyles = ctl(`
    w-full 
    py-1 
    px-1 
    border-2 
    border-brightNavyBlue 
    outline-none 
    rounded-m
`);
export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "summit",
  });
  const posts = await res.items;

  const paths = posts.map((item) => {
    return {
      params: { id: `${item.sys.id}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const currentUrl = params.id;

  const postRes = await client.getEntry(currentUrl);
  return {
    props: { postRes },
  };
}
