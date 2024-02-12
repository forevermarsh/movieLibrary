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
        alignItems: "start",
        width: "100%",
        textAlign: "start",
      }}
    >
      <h3 style={{ padding: "0 5%" }}>Movies</h3>

      <Navbar />
    </div>
  );
}

export default Movies;
