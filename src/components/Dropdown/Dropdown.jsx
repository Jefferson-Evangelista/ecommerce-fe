import React from "react";

const Dropdown = ({ type, values }) => {
  return (
    <div className="">
      <label htmlFor={type} className="mb-2 font-krona text-sm font-bold">
        {type}
      </label>
      <select
        name={type}
        id={type}
        className="outline-none focus:ring-2 focus:ring-yellow"
      >
        {values.map((value, index) => (
          <option key={`${index}-${value}`}>{value}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
