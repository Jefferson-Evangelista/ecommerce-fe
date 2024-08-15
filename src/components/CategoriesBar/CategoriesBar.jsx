import React from "react";
import { useState } from "react";
import { CATEGORIES } from "../../constants/categories";

const CategoriesBar = ({ setFilter }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const setCategory = (e) => {
    const value = e.target.innerText;

    setFilter("product_type", value);
    setActiveCategory(value);
  };

  return (
    <>
      {CATEGORIES.map((cat) => (
        <div key={cat.name}>
          <h4 className="mb-4 font-krona">{cat.name}</h4>
          <ul className="ml-4 space-y-2">
            {cat.subCategories.map((subCat) => (
              <li
                key={subCat}
                onClick={setCategory}
                className={`cursor-pointer hover:text-yellow ${activeCategory === subCat ? "font-medium text-yellow" : ""}`}
              >
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
