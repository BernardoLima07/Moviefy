import React, { useState } from "react";
import { responsive } from "../helpers/responsiveCss";
import imageUrl from "../helpers/imageURL";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ContainerMovies } from "../../pages/home/styles";
import { CarouselContainer, GenresTitle, MovieImageCarousel } from "./styles";

export const CarouselComponent = ({
  conditionDefaultMovieBoolean,
  popularMoviesIndexZero,
  topRatedSeriesIndexZero,
  upcomingMoviesIndexZero,
  handleMovieClick,
  selectedMovie,
  searchedMovieResult,
  getCarouselMoviesSearchedByConditionProp,
}) => {
  const [borderCondition, setBorderCondition] = useState(true);

  const borderMoviesByCondition = (movie) => {
    switch (conditionDefaultMovieBoolean) {
      case true:
        return (
          (popularMoviesIndexZero && popularMoviesIndexZero.id === movie.id) ||
          (topRatedSeriesIndexZero &&
            topRatedSeriesIndexZero.id === movie.id) ||
          (upcomingMoviesIndexZero && upcomingMoviesIndexZero.id === movie.id)
        );
      case false:
        return selectedMovie?.id === movie.id;
      default:
        return null;
    }
  };

  return (
      <CarouselContainer>
        <Carousel
          swipeable={false}
          draggable={false}
          removeArrowOnDeviceType={["tablet", "mobile", "miniMobile", "tablet"]}
          infinite={true}
          responsive={responsive}
        >
          {getCarouselMoviesSearchedByConditionProp().map((movie) => (
            <ContainerMovies key={movie.id}>
              <MovieImageCarousel
                width={150}
                src={`${imageUrl}${movie.poster_path}`}
                alt={movie.title}
                onClick={() => {
                  handleMovieClick(movie);
                  setBorderCondition(borderMoviesByCondition(movie));
                }}
                borderMoviesByConditionProp={borderMoviesByCondition(movie)}
              />
            </ContainerMovies>
          ))}
        </Carousel>
      </CarouselContainer>
  );
};
