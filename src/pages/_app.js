import "@/styles/globals.css";
import { _api } from "@iconify/react";
import { productSans } from "@/constants/font";

export default function App({ Component, pageProps }) {
  return (
    <main className={productSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
