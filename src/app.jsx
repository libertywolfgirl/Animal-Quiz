import React, { useState, useEffect } from "react";
import { Link } from "wouter";

// Import and apply CSS stylesheet
import "./styles/styles.css";

// Routes
import Router from "./components/router.jsx";

// Language strings
const strings = [
  "Hello React",
  "Bonjour React",
  "Hola React",
  "안녕 React",
  "Hej React"
];

// Utility function to choose a random value from the language array
function randomLanguage() {
  return strings[Math.floor(Math.random() * strings.length)];
}

export default function Home() {
  const [hello, setHello] = useState(strings[0]);
  const handleChangeHello = () => {
    // Choose a new Hello from our languages
    const newHello = randomLanguage();
    // And set it in our components state
    setHello(newHello);
  };
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <Router />
        </div>
      </div>
      <footer class="footer">
        <div class="links">
          <Link href="/">Home</Link>
          <span class="divider">|</span>
          <Link href="/how-to-use">How to Use</Link>
          <span class="divider">|</span>
          <Link href="/next-steps">Next Steps</Link>
        </div>
        <a
          className="btn--remix"
          href="https://glitch.com/edit/#!/remix/glitch-hello-eleventy"
        >
          <img src="https://cdn.glitch.com/a9975ea6-8949-4bab-addb-8a95021dc2da%2FLogo_Color.svg?v=1602781328576" />
          Remix on Glitch
        </a>
      </footer>
    </>
  );
}