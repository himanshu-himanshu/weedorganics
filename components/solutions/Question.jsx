const Question = () => {
  return (
    <div className="w-full h-full bg-secondary py-12 md:py-18 lg:py-20">
      <div className="container max-w-8xl mx-auto px-8 lg:px-0">
        <div className="w-full flex flex-col lg:flex-row items-center text-center lg:text-start space-y-8 lg:space-y-0">
          <div className="w-full lg:w-2/3">
            <h1 className="text-3xl lg:text-4xl font-Alata font-bold tracking-wide py-2 text-gray-700">
              Have any question?
            </h1>
            <p className="font-Raleway py-2 text-md font-semibold text-gray-600 mt-4 lg:mt-0">
              We're here to help. Send us an email or call us at +012-345-6789.
              Please feel free to contact our expert.
            </p>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center">
            <button className="px-8 lg:px-10 py-4 uppercase font-Montserrat font-extrabold tracking-wider rounded-sm bg-pink-500 text-white duration-200 hover:shadow-xl hover:-translate-y-0.5">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
