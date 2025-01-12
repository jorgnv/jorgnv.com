import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Nav from "components/nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
