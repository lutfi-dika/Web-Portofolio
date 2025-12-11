import React from "react";
import "../style/Topbar.css";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="title">Portfolio — Visual Studio Code</div>
            <div className="window-btns">
                <span>—</span>
                <span>□</span>
                <span>✖</span>
            </div>
        </div>
    );
}

