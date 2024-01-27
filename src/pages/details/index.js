import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "./styles";
import { Movie } from "./styles";

export const Details = ({selectedMovie, selectedMovieTitle, selectedMovieOverview, selectedMoviePoster, onClose }) => {
  console.log(selectedMovie)
  console.log(selectedMovieTitle)  
  return (
    <Container>
      <Movie>
        <img src={selectedMoviePoster} alt={selectedMovieTitle} />
        <div className="details">
          <h2>{selectedMovieTitle}</h2>
          <h2>{selectedMovieOverview}</h2> 

          <button onClick={() => onClose()}>Voltar</button>
        </div>
      </Movie>
    </Container>
  );
};
