import React from "react";
import '../index.css'



export default function MovieCard() {
  return (
    <>
      <div
        style={{
          minWidth: "120px",
          height: "200px",
          backgroundColor: "#fff",
          margin: "5px",
          display: "flex",
          justifyContent: "start",
          flexDirection: 'column'
        }}
      >
        <div
        className="poster"
          style={{
            width: "100%",
            height: "70%",
            backgroundColor: "pink",
            borderRadius: "5%",
          }}
        ></div>
        <span style={{fontSize: '12px', padding: '0 5px'}}>The Witcher</span>
        <span style={{fontSize: '10px', padding: '0 5px'}}>Action/Adventure {'\u2022'} 2023</span>
        <div style={{display: 'flex'}}>
        <button style={{width:'50px', height: '10px', margin: '3px',display:'flex', alignItems: 'center', justifyContent: 'center'}}><span style={{fontSize: '7px'}}>Buy</span></button>
        <button style={{width:'50px', height: '10px', margin: '3px',display:'flex', alignItems: 'center', justifyContent: 'center'}}><span style={{fontSize: '7px'}}>PG-13</span></button>
        </div>
        <div>

        </div>
      </div>
    </>
  );
}
