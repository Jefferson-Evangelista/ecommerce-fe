import React from "react";
import { CATEGORIES } from "../../constants/categories";

const CategoriesBar = () => {
  return (
    <>
      {CATEGORIES.map((cat) => (
        <div key={cat.name}>
          <h4 className="mb-2 cursor-pointer font-krona hover:text-yellow">
            {cat.name}
          </h4>
          <ul className="ml-4 space-y-2">
            {cat.subCategories.map((subCat) => (
              <li key={subCat} className="cursor-pointer hover:text-yellow">
                {subCat}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default CategoriesBar;
