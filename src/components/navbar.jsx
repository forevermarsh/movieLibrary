import React from "react";
import Menu, { Notifications, Search } from "./svg";

function NavBar() {
  return (
    <>
      <div style={{ width: "100%", height: "13vh" }}>
        <div
          style={{
            width: "100%",
            height: "65%",
            backgroundColor: "#4a4a4a",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ padding: "10px" }}>
            <Menu />
          </div>
          <div style={{display: 'flex'}}>
          <div style={{ padding: "10px" }}>
            <Search />
          </div>
          <div style={{ padding: "10px" }}>
            <Notifications />
          </div>
          </div>
        </div>
        <div
          style={{ width: "100%", height: "35%", backgroundColor: "#4a4a4a", display: 'flex', alignItems: 'center' }}
        >
            <h3 style={{padding: '0 10px', color: 'white'}}>Movies</h3>
            <h3 style={{padding: '0 10px', color: 'white'}}>Tv Series</h3>
            <h3 style={{padding: '0 10px', color: 'white'}}>Animations</h3>
        </div>
      </div>
    </>
  );
}

export default NavBar;
