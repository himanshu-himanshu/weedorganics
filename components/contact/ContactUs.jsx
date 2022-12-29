import React, { useState } from "react";
import Image from "next/image";

import image from "../../public/contactt.svg";

const ContactUs = () => {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [services, setServices] = useState("");
  const [licence, setLicence] = useState("yes");
  const [heardAboutUs, setHeardAboutUs] = useState("");

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    // if (fullname.length <= 0) {
    //   tempErrors["fullname"] = true;
    //   isValid = false;
    // }
    // if (email.length <= 0) {
    //   tempErrors["email"] = true;
    //   isValid = false;
    // }
    // if (subject.length <= 0) {
    //   tempErrors["subject"] = true;
    //   isValid = false;
    // }
    // if (message.length <= 0) {
    //   tempErrors["message"] = true;
    //   isValid = false;
    // }

    // setErrors({ ...tempErrors });
    // console.log("errors", errors);
    return isValid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();
    if (isValidForm) {
      // setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      }
      console.log(fullname, email);
    }
  };
  return (
    <div className="w-full h-full bg-gray-100 py-12 md:py-18 lg:py-20">
      <div className="container max-w-6xl mx-auto px-8 lg:px-0">
        <div className="w-full flex flex-col justify-center items-center py-6 md:py-8 lg:py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-Raleway font-bold text-primary text-center underline--magical tracking-wide">
            Get in touch
          </h1>
        </div>
        <div className="flex flex-col md:flex-row py-12">
          <div className="hidden lg:flex w-full md:w-1/2">
            <Image src={image} alt="Customer Image" className="w-[500px]" />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 w-full lg:w-2/3 items-center py-2"
          >
            <input
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
              type="text"
              placeholder="Enter Full Name"
              className="input w-[90%]"
            />
            <div className="w-[90%] flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
              <input
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="phone"
                placeholder="Phone"
                className="input w-full"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
                className="input w-full"
              />
            </div>
            <div className="w-[90%] flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
              <input
                onChange={(e) => {
                  setZip(e.target.value);
                }}
                value={zip}
                type="text"
                placeholder="Postal code"
                className="input w-full"
              />
              <input
                type="text"
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
                value={companyName}
                placeholder="Company name"
                className="input w-full"
              />
            </div>

            <label for="services" className="text-gray-700">
              Services that interest you.
            </label>
            <select
              name="services"
              id="services"
              onChange={(e) => {
                setServices(e.target.value);
              }}
              value={services}
              className="input text-gray-600 w-[90%]"
            >
              <option value="retail">Retail Solutions</option>
              <option value="brand">Brand Solutions</option>
              <option value="doctor">Doctor Solutions</option>
              <option value="others">Others</option>
            </select>

            <label for="licence" className="text-gray-700">
              Have a licence number?
            </label>
            <select
              name="licence"
              id="licence"
              onChange={(e) => {
                console.log(e.target.value);
                setLicence(e.target.value);
              }}
              value={licence}
              className="input text-gray-600 w-[90%]"
              placeholder="Select"
            >
              <option value="yes">Yes</option>
              <option value="no" selected>
                No
              </option>
            </select>
            {licence == "yes" && (
              <input
                type="text"
                placeholder="Licence Number"
                className="input w-[90%]"
              />
            )}
            <label for="heard_about_us" className="text-gray-700">
              Where did you hear about us?
            </label>
            <select
              name="heard_about_us"
              onChange={(e) => {
                setHeardAboutUs(e.target.value);
              }}
              value={heardAboutUs}
              id="licence"
              className="input text-gray-600 w-[90%] "
            >
              <option value="social" selected>
                Social Media
              </option>
              <option value="google">Google</option>
              <option value="linkedin">LinkedIn</option>
              <option value="friends">Friends</option>
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="store">Store</option>
            </select>

            <button
              type="submit"
              className="w-[90%] border-pink-500 px-8 py-4 text-lg uppercase text-pink-600 rounded-sm hover:bg-pink-500 hover:text-gray-100 duration-200 hover:-translate-y-0.5 hover:shadow-lg tracking-wider font-Montserrat"
            >
              Submit &rarr;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

// import Image from "next/image";
// import React, { useState } from "react";

// import image from "../../public/contactt.svg";

// const ContactUs = () => {
//   return (
//     <div className="w-full h-full bg-gray-100 py-12 md:py-18 lg:py-20">
//       <div className="container max-w-6xl mx-auto px-8 lg:px-0">
//         <div className="w-full flex flex-col justify-center items-center py-6 md:py-8 lg:py-12">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-Raleway font-bold text-primary text-center underline--magical tracking-wide">
//             Get in touch
//           </h1>
//         </div>
//         <div className="flex flex-col md:flex-row py-12">
//           <div className="hidden lg:flex w-full md:w-1/2">
//             <Image src={image} alt="Customer Image" className="w-[500px]" />
//           </div>
//           <form
//             action="#"
//             className="flex flex-col space-y-4 w-full lg:w-2/3 items-center py-2"
//           >
//             <input
//               type="text"
//               placeholder="Enter Full Name"
//               className="input w-[90%]"
//             />
//             <div className="w-[90%] flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
//               <input
//                 type="phone"
//                 placeholder="Phone"
//                 className="input w-full"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="input w-full"
//               />
//             </div>
//             <div className="w-[90%] flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
//               <input
//                 type="text"
//                 placeholder="Postal code"
//                 className="input w-full"
//               />
//               <input
//                 type="text"
//                 placeholder="Company name"
//                 className="input w-full"
//               />
//             </div>

//             <label for="services" className="text-gray-700">
//               Interested Services
//             </label>
//             <select
//               name="services"
//               id="services"
//               className="input text-gray-600 w-[90%]"
//             >
//               <option value="retail" selected>
//                 Retail Solutions
//               </option>
//               <option value="brand">Brand Solutions</option>
//               <option value="doctor">Doctor Solutions</option>
//               <option value="others">Others</option>
//             </select>

//             <label for="licence" className="text-gray-700">
//               Have a licence number?
//             </label>
//             <select
//               name="licence"
//               id="licence"
//               className="input text-gray-600 w-[90%]"
//             >
//               <option value="yes" selected>
//                 Yes
//               </option>
//               <option value="no">No</option>
//             </select>

//             <label for="hear_us" className="text-gray-700">
//               Where do you heard about us
//             </label>
//             <select
//               name="hear_us"
//               id="licence"
//               className="input text-gray-600 w-[90%] "
//             >
//               <option value="social" selected>
//                 Social Media
//               </option>
//               <option value="google">Google</option>
//               <option value="others">Others</option>
//             </select>

//             <button
//               type="submit"
//               className="w-[90%] border-pink-500 px-8 py-4 text-lg uppercase text-pink-600 rounded-sm hover:bg-pink-500 hover:text-gray-100 duration-200 hover:-translate-y-0.5 hover:shadow-lg tracking-wider font-Montserrat"
//             >
//               Submit &rarr;
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
