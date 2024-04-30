import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Home() {

  return (
    <>
      <Sidebar />
      <Navbar />
      <Footer />
    </>
  );
}

export default Home;