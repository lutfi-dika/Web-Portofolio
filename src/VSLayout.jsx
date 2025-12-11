import React, { useState, useEffect } from "react";

// ⬅️ Semua sudah benar: folder 'component'
import Sidebar from "./component/Sidebar";
import Topbar from "./component/Topbar";
import Explorer from "./component/Explorer";

import HomeSection from "./pages/HomeSection";

// CSS layout (di dalam folder component/style)
import "./style/VSLayout.css";

// Prism Highlighting
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

// Wajib load language untuk syntax highlight
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markdown";

// File tree
import fileTree from "./lang/fileTree";

export default function VSLayout() {
    const [openFile, setOpenFile] = useState({
        path: null,
        content: "",
        ext: null,
    });

    const handleOpenFile = (path, content) => {
        const ext = path.split(".").pop().toLowerCase();
        setOpenFile({ path, content, ext });
    };

    useEffect(() => {
        Prism.highlightAll();
    }, [openFile]);

    const extToLang = {
        js: "javascript",
        jsx: "jsx",
        css: "css",
        html: "markup",
        json: "json",
        md: "markdown",
    };

    return (
        <div className="vscode-container">
            <Topbar />

            <div className="editor-area">

                {/* Left Panel */}
                <div className="left-panel">
                    {/* <Sidebar /> */}
                    <Explorer tree={fileTree} onOpenFile={handleOpenFile} />
                </div>

                {/* Right Panel */}
                <div className="right-panel">
                    {!openFile.path ? (
                        <HomeSection />
                    ) : (
                        <div className="file-view">
                            <div className="file-header">{openFile.path}</div>

                            <pre className="file-content">
                                <code
                                    className={`language-${extToLang[openFile.ext] || "javascript"
                                        }`}
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
