import Head from "next/head";

import image from "../public/ContactUs.jpg";
import ContactUs from "../components/contact/ContactUs";
import Banner from "../components/solutions/Banner";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Testimonials from "../components/testimonial/Testimonials";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us - WeedOrganics</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner src={image} title="Contact Us?" />
      <ContactUs />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Contact;
