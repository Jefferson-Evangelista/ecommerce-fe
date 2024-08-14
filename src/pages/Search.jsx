import React from "react";
import { HeaderBanner, SideBar, TopBar } from "../components";

const Search = () => {
  return (
    <>
      <HeaderBanner />
      <div className="search">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="topbar">
          <TopBar />
        </div>
        <div className="results">Results</div>
      </div>
    </>
  );
};

export default Search;
