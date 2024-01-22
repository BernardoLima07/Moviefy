import React, { useEffect } from "react";
import { Container, Header } from "./styles";
import { Link, useLocation } from "react-router-dom";
import { Movie, MovieList } from "../home/styles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const imageUrl = "https://image.tmdb.org/t/p/w500";

export const Search = () => {
  const location = useLocation();
  const results = location.state ? location.state.results || [] : [];

  return (
    <div>
      <Header>
      <Link to={'/'}>
        <ArrowBackIcon
          sx={{
            width: "50px",
            height: "50px",
            color: "white",
            position: 'absolute',
          }}
        />
      </Link>
        <h1>Resultados da Pesquisa</h1>
      </Header>
      <MovieList>
        {results.length > 0 ? (
          results.map((result) => (
            <Link to={`/details/${result.id}`}>
            <Movie key={result.id}>
              <img src={`${imageUrl}${result.poster_path}`} />
              <h2>{result.title}</h2>
            </Movie>
            </Link>
          ))
        ) : (
          <div>Nenhum resultado encontrado.</div>
        )}
      </MovieList>
    </div>
  );
};
