import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Header, PopularMovieList } from "./styles";
import { ArrowBack } from "@mui/icons-material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import options from "../../config/optionsAPI.js";
import imageUrl from "../../components/helpers/imageURL/index.js";

Modal.setAppElement("#root");

export const Search = ({ isVisible, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isMovieVisible, setIsMovieVisible] = useState(true);

  useEffect(() => {
    if (isMovieVisible) {
      fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        options
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    } else {
      if (searchQuery.trim() !== "") {
        fetch(
          `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
          options
        )
          .then((response) => response.json())
          .then((data) => {
            setSearchResults(data.results);
          })
          .catch((error) =>
            console.error("Error fetching search results:", error)
          );
      }
    }
  }, [isMovieVisible, searchQuery]);


  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setIsMovieVisible(false);
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <Modal
        isOpen={isVisible}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "black",
          },
        }}
        contentLabel="Exemplo de Modal"
      >
        <Header>
          <ArrowBack
            sx={{
              width: "30px",
              height: "30px",
              color: "#ffffff",
            }}
            onClick={() => onClose()}
          />
          <h2>Mais pesquisados</h2>
          <form>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Pesquisa"
            />
          </form>
        </Header>
        <PopularMovieList style={{ maxHeight: "80vh", overflowY: "auto" }}>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            infinite={false}
            responsive={responsive}
          >
            {searchResults.map((result) => (
              <div key={result.id}>
                <img
                  style={{ cursor: "pointer", borderRadius: "20px" }}
                  width={250}
                  src={`${imageUrl}${result.poster_path}`}
                  alt={result.title}
                />
                <p>{result.title}</p>
              </div>
            ))}
          </Carousel>
        </PopularMovieList>
      </Modal>
    </div>
  );
};