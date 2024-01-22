import React, { useState } from "react";
import { Container } from "./styles";
import { Search } from "../pages/search";

import SearchIcon from "@mui/icons-material/Search";

export const Header = () => {
  const [isSearchModalVisible, setSearchModalVisibility] = useState(false);

  return (
    <Container>
      <h1>Moviefy Beta</h1>

      <SearchIcon
        sx={{
          color: "#ffffff",
          width: "35px",
          height: "35px",
        }}
        onClick={() => setSearchModalVisibility(true)}
      />
      {isSearchModalVisible && (
        <Search onClose={() => setSearchModalVisibility(false)} />
      )}
    </Container>
  );
};
