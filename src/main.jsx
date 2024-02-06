import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie.jsx";
import { Search } from "./pages/Search.jsx";
import Home from "./pages/Home.jsx";
import FilmRelease from "./pages/FilmRelease.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/search" element={<Search />} />
          <Route path="/filmrelease" element={<FilmRelease />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
