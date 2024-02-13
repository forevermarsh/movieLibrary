import React from "react";
import Navbar from "../assets/navbar";
import { MovieCard } from "../assets/moviepage";

function Movies() {
    return (
        <div style={{ width: "100%", backgroundColor: "#fff" }}>
            <Navbar />
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
        </div>
    );
}
export default Movies;


export function Category() {
    return(
        <>
                    <div>
                <div
                    style={{
                        margin: "0 10px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <h4 style={{fontWeight: 'lighter'}}>Horror</h4>
                    <button
                        style={{
                            width: "100px",
                            height: "70%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <h6 style={{fontWeight: 'lighter', marginLeft: '5px'}}>View all</h6>
                    </button>
                </div>
                <div className="category" style={{ display: "flex", margin: "0 10px" }}>
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
                    <MovieCard />
                    <MovieCard />
                </div>
            </div>
            <div style={{width: '100%', height: '0.5px', backgroundColor: '#cccccc', margin: '10px 0'}}></div>
        </>
    )
}