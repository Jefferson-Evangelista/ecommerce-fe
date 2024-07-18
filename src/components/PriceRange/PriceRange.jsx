import React from "react";

const PriceRange = () => {
  return (
    <div className="mb-4  bg-gray-200 px-6 py-4">
      <h4 className="mb-2 font-krona text-sm">select price</h4>
      <div className="flex justify-between">
        <div className="text-center ">
          <input
            name="min"
            id="min"
            type="text"
            className="mb-2 w-20 p-2 text-center text-sm caret-yellow outline-none focus:ring-2 focus:ring-inset focus:ring-yellow"
            placeholder="min"
          />
          <label htmlFor="min" className="text-xs">
            min
          </label>
        </div>
        <hr className="mt-4 w-full border border-yellow  " />
        <div className="text-center ">
          <input
            type="text"
            name="max"
            id="max"
            className="mb-2 w-20 p-2 text-center text-sm caret-yellow outline-none focus:ring-2 focus:ring-inset focus:ring-yellow"
            placeholder="max"
          />
          <label htmlFor="max" className="text-xs">
            max
          </label>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
