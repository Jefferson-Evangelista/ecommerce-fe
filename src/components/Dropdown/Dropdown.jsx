import React from "react";

const Dropdown = ({ type, values, onChange }) => {
  return (
    <div className="flex flex-col p-2">
      <label htmlFor={type} className="mb-2 font-krona text-sm font-bold">
        {type}
      </label>
      <select
        name={type}
        id={type}
        className="border-b-2 border-yellow outline-none focus:ring-2 focus:ring-yellow"
        onChange={onChange}
      >
        {values.map((value, index) => (
          <option key={`${index}-${value}`}>{value}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
