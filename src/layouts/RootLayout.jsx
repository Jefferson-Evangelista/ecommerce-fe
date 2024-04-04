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
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
