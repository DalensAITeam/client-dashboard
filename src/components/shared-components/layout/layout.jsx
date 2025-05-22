import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <section className=' '>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </section>
    </>
  );
};

export default Layout;