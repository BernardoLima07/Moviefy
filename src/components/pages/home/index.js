import React, { useEffect, useState } from "react";
import { Movie, MovieList } from "./styles";
import { Link } from "react-router-dom";
import { Header } from "../../header";
import { Details } from "../details";
import { Search } from "../search";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isSearchModalVisible, setSearchModalVisibility] = useState(false);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isDetailsVisible, setDetailsVisibility] = useState(false);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzlkMjZjMTlhNGRiNGYxZDA4MTdiMzIxZmM4ZGU0OSIsInN1YiI6IjY1Njg4YzQxMTI3Nzc4MDlkYWIyMDQyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xJItsBayEScGvSJrhG6vD1ucZLe39B3ldgtp7wjqqvc",
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const handleDetailsVisibility = (movie) => {
    setSelectedMovie(movie);
    setDetailsVisibility(true);
  };
  const handleDetailsClose = () => {
    setDetailsVisibility(false);
  };

  const handleSearchVisibility = () => {
    setSearchModalVisibility(true);
  };

  const handleSearchModalClose = () => {
    setSearchModalVisibility(false);
  };

  const imageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <Header setVisible={handleSearchVisibility} />
      {isSearchModalVisible && (
        <Search
          onClose={handleSearchModalClose}
          isVisible={isSearchModalVisible}
        />
      )}
      {isDetailsVisible ? (
        <Details
          selectedMovieTitle={selectedMovie.title}
          selectedMovieOverview={selectedMovie.overview}
          selectedMoviePoster={`${imageUrl}${selectedMovie.poster_path}`}
          onClose={handleDetailsClose}
        />
      ) : (
        movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`${imageUrl}${movie.poster_path}`}
              alt={movie.title}
              onClick={() => handleDetailsVisibility(movie)}
            />
            <h2>{movie.title}</h2>
          </div>
        ))
      )}
    </div>
  );
};
