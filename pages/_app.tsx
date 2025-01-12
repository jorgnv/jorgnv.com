import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Nav from "components/nav";
import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SpeedInsights />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
