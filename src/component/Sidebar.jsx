import React from "react";
import "../style/Sidebar.css";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-icon">📁</div>
            <div className="sidebar-icon">🔍</div>
            <div className="sidebar-icon">🔄</div>
            <div className="sidebar-icon">🐞</div>
            <div className="sidebar-icon">⚙️</div>
        </aside>
    );
}
