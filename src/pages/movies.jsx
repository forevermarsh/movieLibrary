import React, { SVGProps, useEffect } from "react";
import Navbar from "../components/navbar";
import "../index.css";

import {} from "../components/svg";

function Movies() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Navbar />
      <h1>Movies</h1>
    </div>
  );
}

export default Movies;
