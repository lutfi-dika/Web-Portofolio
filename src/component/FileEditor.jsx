import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import "../style/wrappereditor.css"
import "prismjs/themes/prism-tomorrow.css";

export default function FileEditor({ currentFile, onChange }) {
    const codeRef = useRef();

    useEffect(() => {
        Prism.highlightAll();
    }, [currentFile]);

    if (!currentFile) {
        return <div className="empty-editor">Select a file to start editing…</div>;
    }

    return (
        <div className="editor-wrapper">
            <div className="filename">{currentFile.name}</div>

            <div className="editor-container">
                <textarea
                    className="editor-input"
                    value={currentFile.content}
                    onChange={(e) => onChange(e.target.value)}
                />

                <pre className="editor-highlight">
                    <code ref={codeRef} className="language-jsx">
                        {currentFile.content}
                    </code>
                </pre>
            </div>
        </div>
    );
}

