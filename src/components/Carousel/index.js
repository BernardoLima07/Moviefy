import React, { useState } from "react";
import { responsive } from "../helpers/responsiveCss";
import imageUrl from "../helpers/imageURL";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ContainerMovies } from "./styles";
import { CarouselContainer, GenresTitle, MovieImageCarousel } from "./styles";

export const CarouselComponent = ({
  conditionDefaultMovieBoolean,
  popularMoviesIndexZero,
  topRatedSeriesIndexZero,
  upcomingMoviesIndexZero,
  handleMovieClick,
  selectedMovie,
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

  const handleImageClick = (movie) => {
    handleMovieClick(movie);
    setBorderCondition(borderMoviesByCondition(movie));
  };

  return (
    <CarouselContainer>
      <GenresTitle>Popular</GenresTitle>
      <Carousel
        swipeable={["tablet", "mobile", "miniMobile"]}
        draggable={false}
        removeArrowOnDeviceType={["tablet", "mobile", "miniMobile"]}
        infinite={true}
        responsive={responsive}
      >
        {getCarouselMoviesSearchedByConditionProp().map((movie) => (
          <ContainerMovies
            key={movie.id}
            whileHover={{ scale: 1.13 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            onClick={() => handleImageClick(movie)}
          >
            <MovieImageCarousel
              width={150}
              src={`${imageUrl}${movie.poster_path}`}
              alt={movie.title}
              borderMoviesByConditionProp={borderMoviesByCondition(movie)}
            />
          </ContainerMovies>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};  