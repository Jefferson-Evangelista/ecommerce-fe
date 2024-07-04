import React from "react";

import links from "../../data/footerLinks.json";
import BrandLink from "../BrandLink";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "../Icons";

const Footer = () => (
  <footer className="flex flex-col justify-between bg-dark p-8 text-light md:flex-row">
    <BrandLink classes="text-yellow mb-4 md:mb-0 md:pl-4 inline-block order-1" />

    <div className="order-3 flex flex-col justify-between space-x-0 space-y-8 md:order-2 md:mx-auto md:flex-row md:space-x-8 md:space-y-0">
      {links.map((item) => (
        <div className="flex flex-col flex-wrap" key={item.title}>
          <h6 className="font-krona text-sm">{item.title}</h6>
          <div>
            {item.links.map((link) => (
              <Link
                to={link.path}
                key={link.name}
                className="block text-sm lowercase hover:text-yellow"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="order-2 mb-6 flex space-x-4 text-yellow md:order-3 md:mb-0 md:block md:space-x-0">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        className="hover:text-light-grey mb-4 block"
      >
        <FacebookIcon />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
        className="hover:text-light-grey mb-4 block"
      >
        <TwitterIcon />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        className="hover:text-light-grey mb-4 block"
      >
        <InstagramIcon />
      </a>
    </div>
  </footer>
);

export default Footer;
