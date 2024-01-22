import React, { useState } from "react";
import { Container } from "./styles";
import { Search } from "../pages/search";

import SearchIcon from "@mui/icons-material/Search";

export const Header = ({setVisible}) => {
  

  return (
    <Container>
      <h1>Moviefy Beta</h1>

      <SearchIcon
        sx={{
          color: "#ffffff",
          width: "35px",
          height: "35px",
        }}
        onClick={() => setVisible()}
      />
      
    </Container>
  );
};
