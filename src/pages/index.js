import axios from "axios";
import React from "react";

import { Footer, Header } from "@/components";
import { IntroContent } from "@/components/Home";
import ExampleEvents from "@/components/Home/ExampleEvents";
import { client } from "@/utils";
import UseShowTopBtn from "@/utils/useShowTopBtn";

export default function Home({ posts }) {
  const [showTopBtn, setShowTopBtn] = UseShowTopBtn();
  console.log(posts, "postss");
  // React.useEffect(() => {
  //   const contentType = "summit";
  //   const filterParameters = "fields.eventName=testing";
  //   // const filterParameters = "fields.eventName=2022Hackaton";
  //   async function hill(params) {
  //     const data = await fetchContentfulData(contentType, filterParameters);
  //     console.log(data);
  //   }
  //   hill();
  // }, []);

  return (
    <>
      <main>
        <Header />
        <IntroContent />
        <section className="py-10 w-[92%] max-w-[1500px] mx-auto space-y-6">
          <h3 className="capitalize text-3xl font-bold">upcoming events</h3>
          <ExampleEvents />
          <h3 className="capitalize text-3xl font-bold">past events</h3>
          <ExampleEvents />
        </section>
        <Footer />
      </main>
    </>
  );
}

const fetchContentfulData = async (contentType, filterParameters) => {
  const spaceId = process.env.NEXT_PUBLIC_SPACE;
  const environmentId = process.env.NEXT_PUBLIC_ENVIRONMENT;
  const accessToken = process.env.NEXT_PUBLIC_ACCESSTOKEN;

  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?content_type=${contentType}&${filterParameters}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching Contentful data:", error);
    return null;
  }
};
export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "summit",
  });
  const posts = await res.items;
  return {
    props: { posts },
  };
}
