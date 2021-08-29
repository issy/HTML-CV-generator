import "tailwindcss/tailwind.css";
import Head from "next/head"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My CV</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}