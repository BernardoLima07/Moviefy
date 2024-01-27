import styled from "styled-components";

export const Header = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginInline: "50px",

  h2: {
    color: "#ffffff"
  }
});

export const PopularMovieList = styled.div({
  display: "grid",
  gap: "40px",

  img: {
    borderRadius: "1rem",
  },
});
