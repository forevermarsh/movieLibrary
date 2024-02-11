import React from "react";
import NavBar from "../components/navbar";
import { Link } from "react-router-dom";


function MainPage() {
    <>
    <div style={{width: '100%', height: '100%'}}>
        <NavBar />
        <h1>movies</h1>
        <Link to="/movies">
            <button>movies</button>
        </Link>
    </div>
    </>
}

export default MainPage;