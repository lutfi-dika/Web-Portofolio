import React, { useEffect, useState } from "react";
import "../style/preloader.css";

export default function Preloader() {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => (prev.length < 3 ? prev + "." : ""));
        }, 400);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="preloader">
            <div className="loader-box" data-aos="fade-in">
                <h1 className="loader-title">Lutfi.dev</h1>
                <p className="loader-sub">
                    Initializing portfolio{dots}
                </p>
                <div className="loading-bar">
                    <span></span>
                </div>
            </div>
        </div>
    );
}
