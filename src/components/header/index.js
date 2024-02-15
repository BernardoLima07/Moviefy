import React, { useState } from "react";
import {
  Container,
  Title,
  TabsContainer,
  Tabs,
  ContainerSearchIcon,
  InputSearch,
  MenuIconStyled,
} from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({
  setConditionCarousel,
  setConditionDefaultMovieBooleanProp,
  setSearchedMovieResult,
  setSearchedMovie,
  setConditionCarouselMoviesSearchedProp,
}) => {
  const [selectedText, setSelectedText] = useState("Movies");
  const [searchInput, setSearchInput] = useState("");

  const handleTextClick = (text) => {
    setSelectedText(text);
    setConditionCarousel(text);
    setConditionDefaultMovieBooleanProp(true);
    setSearchInput("");

    switch (text) {
      case "Movies":
        return setSearchedMovie(""), setSearchedMovieResult([]);
      case "Upcoming":
        return setSearchedMovie(""), setSearchedMovieResult([]);
      case "TvSeries":
        return setSearchedMovie(""), setSearchedMovieResult([]);
      default:
        return [];
    }
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchedMovie(searchInput);
      setConditionCarouselMoviesSearchedProp(false);
    }
  };

  return (
    <Container>
      <Title>MOVIEFY</Title>
      <ContainerSearchIcon>
        <InputSearch
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={handleSearchKeyPress}
        />
      </ContainerSearchIcon>
    </Container>
  );
};

export default Header;
