import React from "react";
import Logo from "assets/svg/logo.svg";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <Logo className="home-logo" alt="logo" />
        <h1 className="home-title">Alright React App</h1>
        <p className="home-text">Edit to see changes</p>
      </header>
    </div>
  );
}
