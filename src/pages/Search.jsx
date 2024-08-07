import React from "react";
import { HeaderBanner, SideBar, TopBar, Products } from "../components";
import useSearch from "../hooks/useSearch";

const Search = () => {
  const { products, setFilter } = useSearch();

  return (
    <>
      <HeaderBanner />
      <div className="search">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="topbar">
          <TopBar setFilter={setFilter} />
        </div>
        <div className="results">
          <Products products={products} />
        </div>
      </div>
    </>
  );
};

export default Search;
