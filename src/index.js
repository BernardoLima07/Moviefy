import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Home } from "./pages/home";
import { Details } from "./pages/details";
import { Search } from "./pages/search";

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
