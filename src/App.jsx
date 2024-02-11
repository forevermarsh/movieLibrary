import React from "react";
import NavBar from "./components/navbar";
import MovieCard from "./components/moviecards";

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
      <hr />

      <div style={{ paddingTop: "13vh" }}>
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
          <h5>Horror</h5>
          <span>see all</span>
        </div>
        <div
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
      </div>
    </>
  );
}
