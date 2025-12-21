import React, { useState, useEffect } from "react";

// Component
import Preloader from "./component/Preloader";
import Sidebar from "./component/Sidebar";
import Topbar from "./component/Topbar";
import Explorer from "./component/Explorer";

// Home Page
import HomeSection from "./pages/HomeSection";

// CSS Layout
import "./style/VSLayout.css";

// PrismJS (penting: import default dari "prismjs")
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

// Load languages
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markdown";

// File tree
import fileTree from "./lang/fileTree";

export default function VSLayout() {

    // STATE Preloader
    const [loading, setLoading] = useState(true);

    // STATE Open File
    const [openFile, setOpenFile] = useState({
        path: null,
        content: "",
        ext: null,
    });

    const handleOpenFile = (path, content) => {
        const ext = path.split(".").pop().toLowerCase();
        setOpenFile({ path, content, ext });
    };

    // Efek highlight
    useEffect(() => {
        Prism.highlightAll();
    }, [openFile]);

    // Loading delay
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1800);
        return () => clearTimeout(timer);
    }, []);

    const extToLang = {
        js: "javascript",
        jsx: "jsx",
        css: "css",
        html: "markup",
        json: "json",
        md: "markdown",
    };

    // Jika loading: tampilkan Preloader
    if (loading) return <Preloader />;

    return (
        <div className="vscode-container">

            <Topbar />

            <div className="editor-area">

                <div className="left-panel">
                    <Explorer tree={fileTree} onOpenFile={handleOpenFile} />
                </div>

                <div className="right-panel">
                    {!openFile.path ? (
                        <HomeSection />
                    ) : (
                        <div className="file-view">
                            <div className="file-header">{openFile.path}</div>

                            <pre className="file-content">
                                <code
                                    className={`language-${extToLang[openFile.ext] || "javascript"}`}
                                >
                                    {openFile.content}
                                </code>
                            </pre>
                        </div>
                    )}
    
                </div>
            </div>
        </div>
    );
}
