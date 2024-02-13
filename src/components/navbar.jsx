import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import clickSound from "../click_sound.mp3";
import { Menu, Notifications, Search } from "./svg";
import "../index.css";



function Navbar() {


  function play() {
    new Audio(clickSound).play();
  }

  return (
    <>
    <div style={{width: '100%', height: '13vh', backgroundColor: '#f2f2f2', padding: "0"}}>
      <div style={{height: '60%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 5%'}}>
        <div style={{width: '20%',display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Menu />
        <h6>Kalaz Ml</h6>
        </div>
        <Notifications />
      </div>
      <div style={{height: '40%', display: 'flex', alignItems: 'center'}}>
      <NavLink onClick={play} to="/movies" style={{width: '20%', height:'100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black'}}><h5>Movies</h5></NavLink>
      <NavLink onClick={play} to="/series" style={{width: '20%', height:'100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black'}}><h5>Series</h5></NavLink>
      <NavLink onClick={play} to="/search" style={{width: '20%', height:'100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black'}}><h5>Search</h5></NavLink>
      </div>
    </div>
    </>
  );
}

export default Navbar;
