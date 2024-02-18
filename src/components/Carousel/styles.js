import styled from "styled-components";

export const CarouselContainer = styled.div({
  display: "grid",
  position: "relative",
  bottom: "20%",

  "@media (max-width: 768px)": {
    position: "fixed",
    bottom: 0,
    left: 0,
    padding: "20px 0",
    zIndex: 100,
    width: "100%",
    height: "calc(40% - 40px)",
  },

  "@media (min-width: 769px) and (max-width: 1024px)": {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: "20px 0",
    zIndex: 100,
  },

  "@media (min-width: 1025px) and (max-width: 1440px) and (max-height: 780px)": {
    width: "100%",
    padding: "20px 0",
    zIndex: 100,
    bottom: "280px",
  },
});

export const MovieImageCarousel = styled.img(
  ({ borderMoviesByConditionProp }) => ({
    cursor: "pointer",
    borderRadius: "3px",
    transition: "transform 0.29s ease-in-out",
    border: borderMoviesByConditionProp ? "3px solid #ffffff" : "none",
    position: "relative",
    maxHeight: "221px",

    "&:hover": {
      transform: "scale(1.13)",
    },

    "@media (max-width: 768px)": {
      width: "85%",
    },
  })
);

export const GenresTitle = styled.p({
  display: "flex",
  justifyContent: "start",
  top: "30px",
  position: "relative",
  color: "#48d2af",
  fontSize: "25px",
  marginLeft: "20px",
  fontFamily: "NetflixSans-Medium, sans-serif",

  "@media (max-width: 375px)": {
    marginLeft: "7px",
    top: "7px",
  },
  "@media (min-width: 376px) and (max-width: 768px)": {
    marginLeft: "7px",
    top: "37px",
  },

  "@media (max-height: 680px)": {
    fontSize: "20px",
  },
});
