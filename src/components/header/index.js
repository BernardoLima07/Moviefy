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
import menuIcon from "../../assets/menuIcon.png";

const Header = ({
  setConditionCarousel,
  setConditionDefaultMovieBooleanProp,
  setSearchedMovieResult,
  setSearchedMovie,
  setConditionCarouselMoviesSearchedProp,
  setIsMenuOpenProp,
  handleMenuClickProp,
}) => {
  const [selectedText, setSelectedText] = useState("Movies");
  const [searchInput, setSearchInput] = useState("");

  const [rotationMenuIcon, setRotationMenuIcon] = useState(false);

  const handleTextClick = (text) => {
    setSelectedText(text);
    setConditionCarousel(text);
    setConditionDefaultMovieBooleanProp(true);
    setSearchInput("");

    switch (text) {
      case "Movies":
        return setSearchedMovie("") && setSearchedMovieResult([]);
      case "Upcoming":
        return setSearchedMovie("") && setSearchedMovieResult([]);
      case "TvSeries":
        return setSearchedMovie("") && setSearchedMovieResult([]);
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
      <Title onClick={() => handleTextClick("Movies")}>MOVIEFY</Title>
      <TabsContainer>
        <Tabs
          isSelected={selectedText === "TvSeries"}
          onClick={() => handleTextClick("TvSeries")}
        >
          TvSeries
        </Tabs>
        <Tabs
          isSelected={selectedText === "Movies"}
          onClick={() => handleTextClick("Movies")}
        >
          Movies
        </Tabs>
        <Tabs
          isSelected={selectedText === "Upcoming"}
          onClick={() => handleTextClick("Upcoming")}
        >
          Upcoming
        </Tabs>
      </TabsContainer>
      <MenuIconStyled
        src={menuIcon}
        alt=""
        onClick={() => {
          setIsMenuOpenProp(true);
          setRotationMenuIcon(true);
          handleMenuClickProp();
        }}
      />
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
