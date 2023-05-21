import Footer from "@/components/footer";
import Header from "@/components/header";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Custom404() {
  return (
    <div>
      <Header />
      <Player
        autoplay
        loop
        src="https://assets5.lottiefiles.com/packages/lf20_cg9lvxff.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>
      <Footer />
    </div>
  );
}
