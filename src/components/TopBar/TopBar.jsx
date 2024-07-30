import React from "react";
import { Dropdown } from "../../components";
import { BRANDS } from "../../constants/brands";
import { SORTING } from "../../constants/sorting";

const TopBar = ({ setFilter }) => {
  const hadleOnChange = (e) => {
    const { name, value } = e.target;
    setFilter(name, value);
  };

  return (
    <div className="flex space-x-4">
      <Dropdown
        type="brand"
        values={["all", ...BRANDS]}
        onChange={hadleOnChange}
      />
      <Dropdown type="sort" values={SORTING} onChange={hadleOnChange} />
    </div>
  );
};

export default TopBar;
