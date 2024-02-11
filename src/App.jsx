import React from "react";
import NavBar from "./components/navbar";
import MovieCard from "./components/moviecards";
import './index.css'



function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "start",
        flexDirection: "column",
      }}
    >
      <div>
        <NavBar />
      </div>
      <div style={{ paddingTop: "14vh" }}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default App;

function Cards() {
  return (
    <>
      <div>
        <div
          style={{
            padding: "0 5%",
            width: "90%",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h5 style={{fontWeight: 'lighter'}}>Horror</h5>
          <button style={{width:'70px', height: '15px', margin: '3px',display:'flex', alignItems: 'center', justifyContent: 'center'}}><span style={{fontSize: '10px'}}>see all</span></button>
        
        </div>
        <div
        className="container"
          style={{ overflowX: "scroll", whiteSpace: "nowrap", display: "flex" }}
        >
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
        <hr />
      </div>
    </>
  );
}
