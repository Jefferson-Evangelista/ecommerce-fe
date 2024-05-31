import React from "react";

const Footer = () => {
  const aboutLinks = [
    "about",
    "about aphrodite",
    "careers",
    "socialmedia",
    "affiliates",
    "supplychain",
    "sitemap",
    "globalsites",
  ];
  const skincareLinks = ["skincare", "makeup", "skincare", "fragrance"];
  const makeupLinks = ["makeup", "base", "contour", "eyemakeup", "lips"];
  const supplementLinks = [
    "supplements",
    "hair & nails",
    "vitamins",
    "nutrients",
  ];
  const luxuryLinks = ["luxury", "makeup", "skincare", "fragrance"];

  return (
    <footer className="bg-dark px-8 py-10 text-light">
      <div className="flex justify-around">
        <div>
          <a className="font-krona text-2xl text-yellow " href="">
            Aphrodite
          </a>
          <p className="text-xs text-darkGrey">Be beautiful</p>
        </div>
        <div className="flex w-1/2 justify-evenly">
          <div>
            {aboutLinks.map((link, index) => (
              <a
                className={`${index === 0 ? "text-md mb-2 font-krona" : "mb-1 text-sm font-normal hover:text-yellow"} ml-4 flex flex-col`}
                href="/"
                key={index}
              >
                {link}
              </a>
            ))}
          </div>
          <div>
            {skincareLinks.map((link, index) => (
              <a
                className={`${index === 0 ? "text-md mb-2 font-krona" : "mb-1 text-sm font-normal hover:text-yellow"} ml-4 flex flex-col`}
                href="/"
                key={index}
              >
                {link}
              </a>
            ))}
          </div>
          <div>
            {makeupLinks.map((link, index) => (
              <a
                className={`${index === 0 ? "text-md mb-2 font-krona" : "mb-1 text-sm font-normal hover:text-yellow"} ml-4 flex flex-col`}
                href="/"
                key={index}
              >
                {link}
              </a>
            ))}
          </div>
          <div>
            {supplementLinks.map((link, index) => (
              <a
                className={`${index === 0 ? "text-md mb-2 font-krona" : "mb-1 text-sm font-normal hover:text-yellow"} ml-4 flex flex-col`}
                href="/"
                key={index}
              >
                {link}
              </a>
            ))}
          </div>
          <div>
            {luxuryLinks.map((link, index) => (
              <a
                className={`${index === 0 ? "text-md mb-2 font-krona" : "mb-1 text-sm font-normal hover:text-yellow"} ml-4 flex flex-col`}
                href="/"
                key={index}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
