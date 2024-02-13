import React from "react";

export default function FullMovieCard() {
    return <></>;
}
export function MovieCard() {
    return (
        <div
            style={{
                minWidth: "100px",
                height: "200px",
                margin: "5px",
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
            }}
        >
            <div className="poster"></div>
            <div>
                <span style={{ fontWeight: "normal", fontSize: "10px" }}>
                    Lisa Frankenstein
                </span>
            </div>
            <div>
                <span style={{ fontSize: "8px" }}>Horror {"\u30fb"} 2024</span>
            </div>
            <div style={{ width: '100%', display: 'flex' }}>
                <span
                    style={{
                        height: "15px",
                        borderRadius: "2px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        marginRight: '10px',
                        backgroundColor: '#f2f2f2',
                        padding: '0 4px'
                    }}
                ><span style={{ fontSize: '5px' }}>Buy / cart</span></span>
                <span
                    style={{
                        height: "15px",
                        borderRadius: "2px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        marginRight: '10px',
                        backgroundColor: '#f2f2f2',
                        padding: '0 4px'
                    }}
                ><span style={{ fontSize: '5px' }}>add to watchlist</span></span>
            </div>
        </div>
    );
}
