import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div style={{ width: "100%", height: "14vh", backgroundColor: "#f2f2f2" }}>
            <div style={{ width: "100%", height: "60%", display: "flex", justifyContent: 'space-between' }}>
                <div
                    style={{
                        width: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Menu />
                </div>
                <div
                    style={{
                        width: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Search />
                </div>
            </div>
            <div style={{ width: "100%", height: "40%", display: "flex" }}>
                <NavLink
                    to="/movies"
                    style={{
                        width: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "black",
                    }}
                >
                    <h4>Movies</h4>
                </NavLink>
                <NavLink
                    to="/series"
                    style={{
                        width: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "black",
                    }}
                >
                    <h4>Series</h4>
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;

export function Menu() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
        >
            <g
                fill="none"
                stroke="currentColor"
                strokeDasharray={24}
                strokeDashoffset={24}
                strokeLinecap="round"
                strokeWidth={2}
            >
                <path d="M5 5H19">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.2s"
                        values="24;0"
                    ></animate>
                </path>
                <path d="M5 12H19">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.2s"
                        dur="0.2s"
                        values="24;0"
                    ></animate>
                </path>
                <path d="M5 19H19">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.4s"
                        dur="0.2s"
                        values="24;0"
                    ></animate>
                </path>
            </g>
        </svg>
    );
}

export function Close() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeDasharray={12}
                strokeDashoffset={12}
                strokeLinecap="round"
                strokeWidth={2}
                d="M12 12L19 19M12 12L5 5M12 12L5 19M12 12L19 5"
            >
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.4s"
                    values="12;0"
                ></animate>
            </path>
        </svg>
    );
}

export function Search() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
            ></path>
        </svg>
    );
}
