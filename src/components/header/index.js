import React from "react";
import { Container } from "./styles";

import SearchIcon from "@mui/icons-material/Search";

export const Header = ({ setVisible }) => {
  return (
    <div style={{justifyContent: 'center', display: 'flex'}}>
    <Container>
      <h1>Moviefy Beta</h1>

      <SearchIcon
        sx={{
          color: "#ffffff",
          width: "35px",
          height: "35px",
          cursor: "pointer",
        }}
        onClick={() => setVisible()}
      />
    </Container>
    </div>
  );
};
