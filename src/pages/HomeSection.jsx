import React, { useEffect, useState } from "react";
import "../style/HomeSection.css";

export default function HomeSection() {
    const code = `
const developer = {
    name: "Lutfi Andika",
    role: "Fullstack Web Developer",
    skills: ["Front End Dev", "UI/UX ", "Poster Digital"],
};

console.log("Welcome to my portfolio!");
    `;

    const [text, setText] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < code.length) {
                setText((prev) => prev + code[index]);
                index++;
            } else clearInterval(interval);
        }, 15);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="editor">
            <pre className="code-area">
                <code>{text}</code>
                <span className="cursor"></span>
            </pre>
        </div>
    );
}