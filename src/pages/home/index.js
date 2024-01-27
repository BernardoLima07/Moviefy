import React, { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Details } from "../details";
import { Search } from "../search";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import options from "../../config/optionsAPI";
import imageUrl from "../../components/helpers/imageURL";
import AvengersBackground from "../../assets/AvengersPosterPath.jpeg";
import Carrossel from "../../components/Carousel";

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [isSearchModalVisible, setSearchModalVisibility] = useState(false);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isDetailsVisible, setDetailsVisibility] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPopularMovies(data.results);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTopRatedMovies(data.results);
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

  return (
    <div>
      <Header setVisible={handleSearchVisibility} />

      {isSearchModalVisible && (
        <Search
          onClose={handleSearchModalClose}
          isVisible={isSearchModalVisible}
          topRatedMovies={topRatedMovies}
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
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                width: "80%",
                opacity: 0.8,
                marginTop: "20px",
                borderRadius: "70px",
              }}
              src={AvengersBackground}
              alt=""
            />
          </div>
          <h1 style={{ color: "white", fontSize: "25px", marginLeft: "20px" }}>
            Popular Movies
          </h1>

          <Carrossel
            movies={popularMovies}
            openDetails={handleDetailsVisibility}
          />
          <Carrossel
            movies={topRatedMovies}
            openDetails={handleDetailsVisibility}
          />
        </>
      )}
    </div>
  );
};
