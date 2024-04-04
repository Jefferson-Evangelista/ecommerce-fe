import React from "react";

const Footer = () => {
  const links = ["about", "skincare", "makeup", "supplements", "contact"];
  return (
    <footer className="h-32 bg-dark px-8 py-4 text-light">
      <div className="flex justify-between">
        <a className="font-krona text-2xl text-yellow " href="">
          Beautify
        </a>
        <div className="flex items-center">
          {links.map((link, index) => (
            <a className="ml-4" href="/" key={index}>
              {link}
            </a>
          ))}
        </div>
      </div>

      <p className="text-xs text-darkGrey">React Project made by Welly</p>
    </footer>
  );
};

export default Footer;
