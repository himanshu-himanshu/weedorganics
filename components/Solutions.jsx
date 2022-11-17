import React from "react";

const Solutions = () => {
  return (
    <div className="w-full h-full bg-gray-200">
      <div class="container max-w-5xl mx-auto px-8 lg:px-0">
        <div className="w-full flex justify-center items-center py-12">
          <h1 className="text-5xl font-Gruppo font-bold text-primary">
            What We Provide
          </h1>
        </div>
        <div className="w-full flex justify-center items-center py-12 font-Montserrat">
          <div className="w-full md:w-2/3">
            <p className="text-4xl font-semibold py-8 text-gray-700">
              Drive Retail Traffic
            </p>
            <p className="text-lg tracking-wide text-gray-600">
              Reach customers looking for organic cannabis products and where to
              purchase them on our web or mobile apps. Expand your digital
              presence with our retail solutions such as store listing, menu,
              deals and more. Connect with customers and drive in store and
              online organic cannabis sales.
            </p>
            <div className="mt-8 hover:-translate-y-1 duration-200">
              <a
                href="#"
                className="px-6 py-3 border border-gray-600 hover:shadow-lg hover:bg-pink-500 hover:text-gray-100 hover:border-pink-500"
              >
                Know More
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <p>Drive Retail Traffic</p>
            <p>
              Reach customers looking for organic cannabis products and where to
              purchase them on our web or mobile apps. Expand your digital
              presence with our retail solutions such as store listing, menu,
              deals and more. Connect with customers and drive in store and
              online organic cannabis sales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
