import React from "react";

import Footer from "@/components/footer";
import SummitGallery from "@/components/Gallery/SummitGallery";
import Header from "@/components/header";
import IntroContent from "@/components/IntroContent";
import { client } from "@/utils";

export default function Gallery({ posts }) {
  return (
    <div>
      <Header />
      <IntroContent />
      <SummitGallery data={posts} />
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "summit",
  });
  const posts = await res.items;
  return {
    props: { posts },
  };
}
