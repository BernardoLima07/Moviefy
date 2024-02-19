import React, { useState } from "react";
import {
  Container,
  Title,
  TabsContainer,
  ContainerSearchIcon,
  InputSearch,
  MenuButton,
} from "./styles";
import TabsHelper from "../helpers/tabs";

const Header = ({
  setSearchedMovie,
  setConditionCarouselMoviesSearched,
  setIsMenuOpen,
  handleMenuOptionsClick,
  conditionCarousel,
  handleMenuClick,
  setConditionCarousel
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchedMovie(searchInput);
      setConditionCarouselMoviesSearched(false);
    }
  };

  const handleClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <Container>
      <Title onClick={() => setConditionCarousel("Movies")}>MOVIEFY</Title>
      <TabsContainer>
        <TabsHelper
          conditionCarouselProp={conditionCarousel}
          handleMenuOptionsClickProp={handleMenuOptionsClick}
        />
      </TabsContainer>
      <MenuButton
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsMenuOpen(true);
          handleMenuClick();
          handleClick();
        }}
      >
        Menu
      </MenuButton>
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
