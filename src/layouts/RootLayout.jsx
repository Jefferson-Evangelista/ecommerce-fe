import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";

const MainLayout = () => {
  return (
    //Navbar
    //Content
    //Footer
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
