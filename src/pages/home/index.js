import React, { useEffect, useState } from "react";
import options from "../../config/optionsAPI";
import { originalImageURL } from "../../components/helpers/originalImageURL";
import { motion } from "framer-motion";
import {
  BackgroundImage,
  Container,
  ContentContainer,
  DetailsContent,
  MovieOverview,
  MovieTitle,
  Details,
  MainContainer,
  SeeMore,
  DefaultScreenContainer,
  MenuContainer,
  ContainerSearchIconMenu,
  InputSearchMenu,
  TabsMenuContainer,
  MotionMenuContainer,
} from "./styles";
import Header from "../../components/header";
import { CarouselComponent } from "../../components/carousel";
import ModalComponent from "../../components/modal";
import TabsHelper from "../../components/helpers/tabs";

export const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  const [searchedMovie, setSearchedMovie] = useState("");
  const [searchedMovieResult, setSearchedMovieResult] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const [conditionCarousel, setConditionCarousel] = useState("Movies");
  const [conditionCarouselMoviesSearched, setConditionCarouselMoviesSearched] =
    useState(false);
  const [conditionDefaultMovie, setConditionDefaultMovie] = useState(true);
  const [conditionDefaultMovieBoolean, setConditionDefaultMovieBoolean] =
    useState(true);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchUpcomingMovies = fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        options
      ).then((response) => response.json());

      const fetchPopularMovies = fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
        options
      ).then((response) => response.json());

      const fetchTopRatedSeries = fetch(
        "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
        options
      ).then((response) => response.json());

      const fetchSearchedMovies = fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchedMovie}&include_adult=false&language=en-US&page=1`,
        options
      ).then((response) => response.json());

      const searchedMoviesData = await fetchSearchedMovies;
      setSearchedMovieResult(searchedMoviesData.results);

      const upcomingMoviesData = await fetchUpcomingMovies;
      setUpcomingMovies(upcomingMoviesData.results);

      const popularMoviesData = await fetchPopularMovies;
      setPopularMovies(popularMoviesData.results);

      const topRatedSeriesData = await fetchTopRatedSeries;
      setTopRatedSeries(topRatedSeriesData.results);
    };

    fetchData();
  }, [searchedMovie]);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setConditionDefaultMovie(false);
    setConditionDefaultMovieBoolean(false);
  };

  const getCarouselMoviesSearchedByCondition = () => {
    switch (conditionCarouselMoviesSearched) {
      case true:
        return getCarouselMoviesByCondition();
      case false:
        return Array.isArray(searchedMovieResult) ? searchedMovieResult : [];
      default:
        return [];
    }
  };

  const getCarouselMoviesByCondition = () => {
    switch (conditionCarousel) {
      case "TvSeries":
        return topRatedSeries;
      case "Movies":
        return popularMovies;
      case "Upcoming":
        return upcomingMovies;
      default:
        return [];
    }
  };

  const getDefaultMovieByCondition = () => {
    switch (conditionCarousel) {
      case "Movies":
        return conditionDefaultMovieBoolean ? popularMovies[0] : selectedMovie;
      case "Upcoming":
        return conditionDefaultMovieBoolean ? upcomingMovies[0] : selectedMovie;
      case "TvSeries":
        return conditionDefaultMovieBoolean ? topRatedSeries[0] : selectedMovie;
      default:
        return null;
    }
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
      setIsMenuOpen(false);
    }
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuOptionsClick = (text) => {
    setConditionCarousel(text);
    setIsMenuOpen(false);
    setConditionDefaultMovieBoolean(true);
    setSearchedMovie("");
  };
  
  const headerProps = {
    setConditionCarousel,
    setSearchedMovie,
    setConditionCarouselMoviesSearched,
    setIsMenuOpen,
    handleMenuClick,
    conditionCarousel,
    handleMenuOptionsClick
  };

  const carouselProps = {
    getCarouselMoviesByCondition,
    conditionDefaultMovieBoolean,
    selectedMovie,
    handleMovieClick,
    topRatedSeriesIndexZero: topRatedSeries[0],
    upcomingMoviesIndexZero: upcomingMovies[0],
    popularMoviesIndexZero: popularMovies[0],
    getCarouselMoviesSearchedByConditionProp: searchedMovie
      ? getCarouselMoviesSearchedByCondition
      : getCarouselMoviesByCondition,
  };

  return (
    <>
      <Header {...headerProps} />

      <DefaultScreenContainer>
        <MainContainer>
          <Container>
            {getDefaultMovieByCondition() && (
              <div>
                <motion.div
                  key={getDefaultMovieByCondition().id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <BackgroundImage
                    backgroundImage={`url(${originalImageURL}${
                      getDefaultMovieByCondition().backdrop_path
                    })`}
                  />

                  <ContentContainer>
                    <MovieTitle>
                      {getDefaultMovieByCondition().title ||
                        getDefaultMovieByCondition().name}
                    </MovieTitle>
                    <DetailsContent>
                      <Details>
                        {getDefaultMovieByCondition().vote_average.toFixed(2)}{" "}
                        Points
                      </Details>
                      <Details>
                        {new Date(
                          getDefaultMovieByCondition().release_date ||
                            getDefaultMovieByCondition().first_air_date
                        ).getFullYear()}
                      </Details>
                    </DetailsContent>
                    <MovieOverview>
                      {getDefaultMovieByCondition().overview.length > 95
                        ? getDefaultMovieByCondition().overview.slice(0, 95) +
                          "..."
                        : getDefaultMovieByCondition().overview}
                      {getDefaultMovieByCondition().overview.length > 95 && (
                        <SeeMore onClick={() => setIsModalOpen(true)}>
                          {" Ver mais"}
                        </SeeMore>
                      )}
                    </MovieOverview>
                  </ContentContainer>
                </motion.div>

                <CarouselComponent {...carouselProps} />
              </div>
            )}

            {isMenuOpen && (
              <MotionMenuContainer  
                initial={{ opacity: 0, scale: 0.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <MenuContainer>
                  <ContainerSearchIconMenu>
                    <InputSearchMenu
                      type="text"
                      placeholder="Search"
                      value={searchedMovie}
                      onChange={(e) => setSearchedMovie(e.target.value)}
                      onKeyPress={handleSearch}
                    />
                  </ContainerSearchIconMenu>
                  <TabsMenuContainer>
                    <TabsHelper
                      conditionCarouselProp={conditionCarousel}
                      handleMenuOptionsClickProp={handleMenuOptionsClick}
                    />
                  </TabsMenuContainer>
                </MenuContainer>
              </MotionMenuContainer>
            )}
          </Container>
        </MainContainer>
      </DefaultScreenContainer>

      {getDefaultMovieByCondition() && (
        <ModalComponent
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          overview={getDefaultMovieByCondition().overview}
        />
      )}
    </>
  );
};
