import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative w-full h-[100vh] z-10 font-Montserrat overflow-hidden bg-[url('https://images.unsplash.com/photo-1609443935270-78d23b74b59a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center">
      <div className="absolute w-full h-full top-0 left-0 -z-20 bg-gray-900/70"></div>
      <div className="container max-w-6xl mx-auto flex flex-col justify-center h-full px-4 md:px-8 space-y-4 ">
        <p className="text-gray-200 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold capitalize">
          <span className="text-pink-700"> Connect customers</span> with organic
          cannabis
        </p>
        <p className="text-gray-300 text-md sm:text-lg lg:text-xl max-w-3xl py-4 mb-8 tracking-wide md:tracking-wider">
          Drive in-store and online sales by engaging with customers looking for
          organic cannabis products. WeedOrganic offers advertising solutions to
          cannabis brands, retailers and clinics. Connect with customers to grow
          your business either on the computer or on your mobile device with our
          apps.
        </p>
        <div className="flex items-center space-x-6 md:space-x-8 tracking-wider text-sm md:text-md">
          <Link href="/contact">
            <button className="banner-link border-pink-600 bg-pink-600 hover:bg-pink-700 hover:border-pink-700">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
