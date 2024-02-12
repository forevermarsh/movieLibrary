import React, { useState } from "react";
import { Link } from "react-router-dom";
import clickSound from "../click_sound.mp3";



function Navbar() {


  function play() {
    new Audio(clickSound).play();
  }

  return (
    <>
    <div style={{width: '100%', height: '7vh', backgroundColor: 'yellow'}}>
      <div>

      </div>
    </div>
    </>
  );
}

export default Navbar;
