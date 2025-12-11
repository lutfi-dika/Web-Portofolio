import React, { useState } from "react";
import "../style/Explorer.css"; // ✅ FIX path CSS

/**
 * Explorer component (VSCode-like)
 * Props:
 *  - tree: file tree array (example below)
 *  - onOpenFile: function(path, content) dipanggil saat file di-klik
 *  - defaultOpenPaths: array folder yg otomatis terbuka
 */
export default function Explorer({ tree = [], onOpenFile = () => { }, defaultOpenPaths = [] }) {
    const [openFolders, setOpenFolders] = useState(new Set(defaultOpenPaths));
    const [activeFile, setActiveFile] = useState(null);

    const toggleFolder = (path) => {
        const next = new Set(openFolders);
        if (next.has(path)) next.delete(path);
        else next.add(path);
        setOpenFolders(next);
    };

    const handleFileClick = (file) => {
        setActiveFile(file.path);
        onOpenFile(file.path, file.content || "");
    };

    const renderTree = (nodes, parentPath = "") => {
        return (
            <ul className="explorer-list">
                {nodes.map((node) => {
                    const path = parentPath ? `${parentPath}/${node.name}` : node.name;

                    // ─── FOLDER ───────────────────────────────────────────────
                    if (node.type === "folder") {
                        const isOpen = openFolders.has(path);

                        return (
                            <li key={path} className="explorer-item folder-item">
                                <div
                                    className="explorer-row"
                                    onClick={() => toggleFolder(path)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => e.key === "Enter" && toggleFolder(path)}
                                >
                                    <span className={`chev ${isOpen ? "open" : ""}`}>▸</span>
                                    <span className="icon">📁</span>
                                    <span className="name">{node.name}</span>
                                </div>

                                {isOpen && node.children && (
                                    <div className="explorer-children">
                                        {renderTree(node.children, path)}
                                    </div>
                                )}
                            </li>
                        );
                    }

                    // ─── FILE ───────────────────────────────────────────────
                    return (
                        <li
                            key={path}
                            className={`explorer-item file-item ${activeFile === path ? "active" : ""}`}
                        >
                            <div
                                className="explorer-row"
                                onClick={() => handleFileClick({ ...node, path })}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === "Enter" && handleFileClick({ ...node, path })}
                            >
                                <span className="icon">📄</span>
                                <span className="name">{node.name}</span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <aside className="explorer">
            <div className="explorer-header">
                <span className="explorer-title">EXPLORER</span>
            </div>

            <div className="explorer-body">
                {tree.length === 0 ? (
                    <div className="explorer-empty">No files</div>
                ) : (
                    renderTree(tree)
                )}
            </div>
        </aside>
    );
}
