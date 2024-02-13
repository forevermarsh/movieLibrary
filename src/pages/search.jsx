import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clickSound from "../click_sound.mp3";
import Navbar from "../components/navbar";
import "../index.css";


function Search() {


  function play() {
    new Audio(clickSound).play();
  }



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
      <h1>Search</h1>
    </div>
  );
}

export default Search;
