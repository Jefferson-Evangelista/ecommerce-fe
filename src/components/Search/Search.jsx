import React from "react";
import useSearch from "../../hooks/useSearch";

import { SideBar, TopBar, Products } from "../../components";

const Search = () => {
  const { setFilter } = useSearch();

  return (
    <div className="search">
      <div className="sidebar">
        <SideBar setFilter={setFilter} />
      </div>
      <div className="topbar">
        <TopBar setFilter={setFilter} />
      </div>
      <div className="results">
        <Products />
      </div>
    </div>
  );
};

export default Search;
