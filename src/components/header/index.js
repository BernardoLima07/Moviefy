import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { useNavigate, Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";

export const Header = () => {
  const [movie, setMovie] = useState("");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzlkMjZjMTlhNGRiNGYxZDA4MTdiMzIxZmM4ZGU0OSIsInN1YiI6IjY1Njg4YzQxMTI3Nzc4MDlkYWIyMDQyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xJItsBayEScGvSJrhG6vD1ucZLe39B3ldgtp7wjqqvc",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        throw e;
      });
  }, []);

  return (
    <Container>
      <h1>Moviefy</h1>
      <Link to={"/search"}>
        <SearchIcon
          sx={{
            color: "#ffffff",
            width: "35px",
            height: "35px",
          }}
        />
      </Link>
    </Container>
  );
};
