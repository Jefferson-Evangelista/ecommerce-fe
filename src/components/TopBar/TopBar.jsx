import React from "react";
import { Dropdown } from "../../components";

const brands = ["a", "b", "c"];
const sorts = ["aa", "bb", "cc"];

const TopBar = () => {
  return (
    <div>
      <Dropdown type="brands" values={brands} />
      <Dropdown type="sort" values={sorts} />
    </div>
  );
};

export default TopBar;
