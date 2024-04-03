import React from "react";

const Footer = () => {
  const links = ["about", "skincare", "makeup", "supplements", "contact"];
  return (
    <footer className="bg-dark text-light h-32 px-8 py-4">
      <div className="flex justify-between">
        <a className="font-krona text-yellow text-2xl " href="">
          Beautify
        </a>
        <div className="flex items-center">
          {links.map((link) => (
            <a className="ml-4" href="/">
              {link}
            </a>
          ))}
        </div>
      </div>

      <p className="text-darkGrey text-xs">React Project made by Welly</p>
    </footer>
  );
};

export default Footer;
