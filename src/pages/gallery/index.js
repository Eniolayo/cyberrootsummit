import React from "react";

import Footer from "@/components/footer";
import SummitGallery from "@/components/Gallery/SummitGallery";
import Header from "@/components/header";
import IntroContent from "@/components/IntroContent";

export default function Gallery() {
  return (
    <div>
      <Header />
      <IntroContent />
      <SummitGallery />
      <Footer />
    </div>
  );
}
