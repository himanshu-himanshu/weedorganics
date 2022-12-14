import Head from "next/head";

import Navbar from "../components/navbar/Navbar";
import Banner from "../components/homepage/Banner";
import Solutions from "../components/homepage/solution/Solutions";
import GrowBusiness from "../components/homepage/GrowBusiness";
import Footer from "../components/footer/Footer";
import ContactUs from "../components/contact/ContactUs";
import Testimonials from "../components/testimonial/Testimonials";

export default function Home() {
  return (
    <div className="bg-pink-100">
      <Head>
        <title>WeedOrganics For Business</title>
        <meta name="description" content="Generated by create next app" />s
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <Solutions />
      <GrowBusiness />
      <ContactUs />
      <Testimonials />
      <Footer />
    </div>
  );
}
