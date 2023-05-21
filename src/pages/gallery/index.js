import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import IntroContent from "@/components/IntroContent";
import SummitGallery from "@/components/Gallery/SummitGallery";

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
