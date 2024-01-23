import React, { useEffect, useState } from "react";
import { Movie, MovieList, Row } from "./styles";
import { Link } from "react-router-dom";
import { Header } from "../../header";
import { Details } from "../details";
import { Search } from "../search";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import AvengersBackground from "../../../assets/AvengersPosterPath.jpeg";
import { SideBar } from "../../sideBar";

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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <Header setVisible={handleSearchVisibility} />
      <SideBar />
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
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{ width: "80%", opacity: 0.8, marginTop: '20px', borderRadius: '70px' }}
              src={AvengersBackground}
              alt=""
            />
          </div>
          <h1 style={{color: 'white', fontSize: '25px', marginLeft: '20px'}}>Popular Movies</h1>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            infinite={true}
            responsive={responsive}
          >
            {movies.map((movie) => (
              <>
                <img
                  style={{ cursor: "pointer", borderRadius: "20px" }}
                  width={250}
                  src={`${imageUrl}${movie.poster_path}`}
                  alt={movie.title}
                  onClick={() => handleDetailsVisibility(movie)}
                />
              </>
            ))}
          </Carousel>
        </>
      )}
    </div>
  );
};
