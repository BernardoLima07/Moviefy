import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Home } from "./components/pages/home";
import { Details } from "./components/pages/details";
import { Search } from "./components/pages/search";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
