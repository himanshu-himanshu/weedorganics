import React from "react";

const Link = ({ title }) => {
  return (
    <a href="#" className="hover:text-pink-500 font-light">
      {title}
    </a>
  );
};

export default Link;
