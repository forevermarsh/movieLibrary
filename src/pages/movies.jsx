import React from "react";
import NavBar from "../components/navbar";
import { Link } from "react-router-dom";

function Movies() {
    return(
        <>
        <div style={{width: '100%'}}>
            <NavBar/>
            <Link to="main">
                <button>main</button>
            </Link>
        </div>
        </>
    )
}

export default Movies;