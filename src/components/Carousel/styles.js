import styled from "styled-components";

export const CarouselContainer = styled.div({
  display: "grid",
  position: "relative",
  bottom: "60%",

  "@media screen and (max-width: 768px)": {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: "20px 0",
    zIndex: 100,
  },

  "@media screen and (min-width: 820px) and (max-width: 1024px)": {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: "20px 0",
    zIndex: 100,
  }
  
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
  display: 'flex',
  justifyContent: 'start',
  top: '40px',
  position: 'relative',
  color: '#48d2af',
  fontSize: '25px',
  marginLeft: '20px',
  fontFamily: "NetflixSans-Medium, sans-serif",

  "@media (max-width: 460px)": {
   marginLeft: '7px'
  }
})