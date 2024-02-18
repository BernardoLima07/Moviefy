import React, { useState } from "react";
import {
  Container,
  Title,
  TabsContainer,
  ContainerSearchIcon,
  InputSearch,
  MenuIconStyled,
} from "./styles";
import menuIcon from "../../assets/menuIcon.png";
import TabsHelper from "../helpers/tabs";

const Header = ({
  setSearchedMovie,
  setConditionCarouselMoviesSearchedProp,
  setIsMenuOpenProp,
  handleMenuOptionsClickProp,
  conditionCarouselProp,
  handleMenuClickProp,
}) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchedMovie(searchInput);
      setConditionCarouselMoviesSearchedProp(false);
    }
  };

  return (
    <Container>
      <Title>MOVIEFY</Title>
      <TabsContainer>
        <TabsHelper
          conditionCarouselProp={conditionCarouselProp}
          handleMenuOptionsClickProp={handleMenuOptionsClickProp}
        />
      </TabsContainer>
      <MenuIconStyled
        src={menuIcon}
        alt=""
        onClick={() => {
          setIsMenuOpenProp(true);
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
