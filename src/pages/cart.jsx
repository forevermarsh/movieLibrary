import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

function Cart() {


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
      <h1 style={{ color: "black" }}>Blog</h1>
    </div>
  );
}

export default Cart;
