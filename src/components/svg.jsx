import React from "react";

export default function Menu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
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

export function Search() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"
      ></path>
    </svg>
  );
}

export function Notifications() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-8-3v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2q.625 0 1.063.438T13.5 3.5v.325q-.275.55-.4 1.125T13 6.125q-.25-.05-.488-.088T12 6q-1.65 0-2.825 1.175T8 10v7h8v-6.425q.45.2.963.313T18 11v6h2v2zM18 9q-1.25 0-2.125-.875T15 6q0-1.25.875-2.125T18 3q1.25 0 2.125.875T21 6q0 1.25-.875 2.125T18 9"
      ></path>
    </svg>
  );
}
