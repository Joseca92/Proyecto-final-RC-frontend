import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeScreen from "../pages/HomeScreen";
import Error404 from "../pages/Error404"

const RoutesDos = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/*" element={<Error404/>}/>
        
      </Routes>
    </>
  );
};

export default RoutesDos;
