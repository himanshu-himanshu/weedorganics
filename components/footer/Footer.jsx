import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialLinkedin,
  SlSocialYoutube,
} from "react-icons/sl";

import Link from "./Link";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-white pt-12">
      <div className="px-4 md:px-8 lg:px-0">
        <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-6 h-full w-full lg:w-1/2 font-Raleway py-8">
            <p className="uppercase font-extrabold text-gray-600 text-xl">
              Quick Links
            </p>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 text-gray-500 tracking-wide text-center">
              <Link title="Home" />
              <Link title="Brand Solution" />
              <Link title="Retail Solution" />
              <Link title="Help Center" />
              <Link title="Contact Us" />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full flex flex-row px-6 py-6 justify-center items-center space-x-2 md:space-x-6 lg:space-x-8 xl:space-x-12">
              <div className="p-2">
                <SlSocialFacebook className="w-6 h-6 text-gray-800" />
              </div>
              <div className="p-2">
                <SlSocialInstagram className="w-6 h-6 text-gray-800" />
              </div>
              <div className="p-2">
                <SlSocialTwitter className="w-6 h-6 text-gray-800" />
              </div>
              <div className="p-2">
                <SlSocialLinkedin className="w-6 h-6 text-gray-800" />
              </div>
              <div className="p-2">
                <SlSocialYoutube className="w-6 h-6 text-gray-800" />
              </div>
            </div>
            <div className="flex flex-row justify-center items-center py-6 space-x-12">
              <img
                src="https://www.prima.co/images/app-badge_apple@2x.png"
                alt=""
                className="h-8 md:h-8 bg-transparent"
              />
              <img
                src="https://www.prima.co/images/app-badge_google@2x.png"
                alt=""
                className="h-8 md:h-8"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center space-y-8 py-12 bg-white border-t">
          <div>
            <img
              alt=""
              src="https://weedorganic.biz/image/weed-organicbiz-logo.png"
              className="h-10 md:h-12"
            />
          </div>
          <p className="text-sm font-light text-gray-700 font-Raleway text-center">
            Copyright © 2021 WeedOrganic INC. “Logo” are registered trademarks
            of WeedOrganic INC. All Rights Reserved. Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
