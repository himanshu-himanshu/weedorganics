import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Solutions from "../components/Solutions";
import GrowBusiness from "../components/GrowBusiness";

export default function Home() {
  return (
    <div className="bg-secondary">
      <Head>
        <title>WeedOrganics For Business</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <Solutions />
      <GrowBusiness />
    </div>
  );
}
