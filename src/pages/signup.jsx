import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

function Signup() {

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
      <h1>Projects</h1>
    </div>
  );
}

export default Signup;
