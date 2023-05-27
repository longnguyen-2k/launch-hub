import React from "react";
import "../../styles/button/loadmorebutton.scss";

export default function LoadMore({ text, onClick }) {
    return (
        <button className="load--more" onClick={onClick}>
            {text}
        </button>
    )
}
