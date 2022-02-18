import React from "react";
import "./App.css";
import AppChild from "./components/AppChild";
import GlobalStyle from "./components/styles/GlobalStyle";

export default function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <AppChild />
    </div>
  );
}
