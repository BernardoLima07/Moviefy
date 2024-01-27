import Carousel from "react-multi-carousel";
import imageUrl from "../helpers/imageURL";

const Carrossel = ({movies, openDetails}) => {
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
    <Carousel
      swipeable={false}
      draggable={false}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      infinite={true}
      responsive={responsive}
    >
      {movies.map((movie) => (
        <>
          <img
            style={{ cursor: "pointer", borderRadius: "20px" }}
            width={250}
            src={`${imageUrl}${movie.poster_path}`}
            alt={movie.title}
            onClick={() => openDetails(movie)}
          />
        </>
      ))}
    </Carousel>
  );
};

export default Carrossel;