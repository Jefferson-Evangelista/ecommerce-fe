import React from "react";
import { HeaderBanner, Search } from "../components";
import SearchProvider from "../state/search-context";

const SearchPage = () => {
  return (
    <>
      <HeaderBanner />
      <SearchProvider>
        <Search />
      </SearchProvider>
    </>
  );
};

export default SearchPage;
