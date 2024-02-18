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
} from "./styles";
import Header from "../../components/header";
import { CarouselComponent } from "../../components/carousel";
import ModalComponent from "../../components/modal";
import {
  ContainerSearchIcon,
  InputSearch,
  Tabs,
} from "../../components/header/styles";

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

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuOptionsClick = (text) => {
    setConditionCarousel(text);
    setIsMenuOpen(false);
    setConditionDefaultMovieBoolean(true);
    setSearchedMovie("");
  };

  return (
    <>
      <Header
        setConditionCarousel={setConditionCarousel}
        setConditionDefaultMovieBooleanProp={setConditionDefaultMovieBoolean}
        setSearchedMovie={setSearchedMovie}
        setSearchedMovieResult={setSearchedMovieResult}
        searchedMovie={searchedMovie}
        setConditionCarouselMoviesSearchedProp={
          setConditionCarouselMoviesSearched
        }
        conditionCarouselProp={conditionCarousel}
        setIsMenuOpenProp={setIsMenuOpen}
        handleMenuClickProp={handleMenuClick}
      />
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
                      {getDefaultMovieByCondition().overview.length > 100
                        ? getDefaultMovieByCondition().overview.slice(0, 100) +
                          "..."
                        : getDefaultMovieByCondition().overview}
                      {getDefaultMovieByCondition().overview.length > 100 && (
                        <SeeMore onClick={() => setIsModalOpen(true)}>
                          {" Ver mais"}
                        </SeeMore>
                      )}
                    </MovieOverview>
                  </ContentContainer>
                </motion.div>
                <CarouselComponent
                  handleMovieClick={handleMovieClick}
                  getCarouselMoviesByCondition={getCarouselMoviesByCondition}
                  conditionDefaultMovieBoolean={conditionDefaultMovieBoolean}
                  topRatedSeriesIndexZero={topRatedSeries[0]}
                  upcomingMoviesIndexZero={upcomingMovies[0]}
                  popularMoviesIndexZero={popularMovies[0]}
                  conditionCarouselProp={conditionCarousel}
                  selectedMovie={selectedMovie}
                  searchedMovieResultProp={searchedMovieResult}
                  getCarouselMoviesSearchedByConditionProp={
                    searchedMovie
                      ? getCarouselMoviesSearchedByCondition
                      : getCarouselMoviesByCondition
                  }
                />
              </div>
            )}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <MenuContainer>
                  <ContainerSearchIconMenu>
                    <InputSearchMenu
                      type="text"
                      placeholder="Search"
                      value={searchedMovie}
                      onChange={(e) => setSearchedMovie(e.target.value)}
                    />
                  </ContainerSearchIconMenu>
                  <Tabs
                    isSelected={conditionCarousel === "TvSeries"}
                    onClick={() => handleMenuOptionsClick("TvSeries")}
                  >
                    TvSeries
                  </Tabs>
                  <Tabs
                    isSelected={conditionCarousel === "Movies"}
                    onClick={() => handleMenuOptionsClick("Movies")}
                  >
                    Movies
                  </Tabs>
                  <Tabs
                    isSelected={conditionCarousel === "Upcoming"}
                    onClick={() => handleMenuOptionsClick("Upcoming")}
                  >
                    Upcoming
                  </Tabs>
                </MenuContainer>
              </motion.div>
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
