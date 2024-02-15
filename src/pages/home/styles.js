import styled from "styled-components";

export const MainContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  paddingTop: 25,
});

export const Container = styled.div({
  display: "flex",
  height: "41.5rem",
  width: "85%",
  position: "relative",
});

export const BackgroundImage = styled.div(({ backgroundImage }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundImage: backgroundImage,
  borderRadius: "15px",
  opacity: "0.6",
  zIndex: 0,
}));

export const ContentContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  position: "relative",
  padding: "20px",
  maxWidth: "50%",
  minHeight: "100%",
  height: "25rem",
});

export const DetailsContent = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  position: "relative",
  bottom: "40px",
  width: "54%",
});

export const MovieTitle = styled.h1({
  zIndex: 0,
  color: "#ffffff",
  fontFamily: "NetflixSans-Medium, sans-serif",
  fontSize: "50px",
  marginLeft: "20px",
});

export const MovieOverview = styled.p({
  fontSize: "20px",
  bottom: "70px",
  color: "#cccccc",
  zIndex: 0,
  fontFamily: "NetflixSans-Medium, sans-serif",
  position: "relative",
  marginLeft: "20px",
});

export const Details = styled.p({
  color: "#48d2af",
  zIndex: 0,
  fontFamily: "NetflixSans-Medium, sans-serif",
  position: "relative",
  marginLeft: "20px",
  fontSize: "18px",
});

export const ContainerMovies = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "20px 0px 20px 0px",
});

export const SeeMore = styled.span({
  color: '#48d2af',
  cursor: 'pointer'
})

export const MobileScreenContainer = styled.div({
  "@media screen and (max-width: 767px)": {
    [`${Container}`]: {
      width: "100%",
    },

    [`${ContentContainer}`]: {
      maxWidth: "100%",
    },

    [`${MovieTitle}`]: {
      fontSize: "22px",
    },

    [`${DetailsContent}`]: {
      marginTop: '50%',
      width: "100%",
    },

    [`${MovieOverview}`]: {
      marginLeft: "20px",
    },

    [`${BackgroundImage}`]: {
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    },
  },
});

export const TabletScreenContainer = styled.div({
  "@media screen and (min-width: 768px) and (max-width: 1024px)": {
    [`${Container}`]: {
      width: "70%",
    },

    [`${ContentContainer}`]: {
      maxWidth: "70%",
    },

    [`${DetailsContent}`]: {
      width: "70%",
    },

    [`${MovieOverview}`]: {
      marginLeft: "10px",
    },

    [`${BackgroundImage}`]: {
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    },
  },
});

export const DesktopScreenContainer = styled.div({
  "@media screen and (min-width: 1025px)": {
    [`${Container}`]: {
      width: "60%",
    },

    [`${ContentContainer}`]: {
      maxWidth: "60%",
    },

    [`${DetailsContent}`]: {
      width: "60%",
    },

    [`${MovieOverview}`]: {
      marginLeft: "20px",
    },

    [`${BackgroundImage}`]: {
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  },
});
