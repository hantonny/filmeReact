/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import './MoviesGrid.css'

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  async function getTopRatedMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  }

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
