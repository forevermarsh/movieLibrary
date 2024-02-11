import React from "react";
import Menu, { Notifications, Search } from "./svg";

function NavBar() {
  return (
    <>
      <div style={{ width: "100%", height: "13vh", position: 'fixed', backgroundColor: '#fff'}}>
        <div
          style={{
            width: "100%",
            height: "60%",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ padding: "10px" }}>
            <Menu />
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ padding: "10px" }}>
              <Search />
            </div>
            <div style={{ padding: "10px" }}>
              <Notifications />
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "40%",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h4
            style={{ padding: "0 15px", color: "black", fontWeight: "lighter" }}
          >
            Movies
          </h4>
          <h4
            style={{ padding: "0 15px", color: "black", fontWeight: "lighter" }}
          >
            Tv Series
          </h4>
          <h4
            style={{ padding: "0 15px", color: "black", fontWeight: "lighter" }}
          >
            Animations
          </h4>
        </div>
        <div style={{width: '100%', height: '1px', backgroundColor: 'black'}}></div>
      </div>
    </>
  );
}

export default NavBar;
