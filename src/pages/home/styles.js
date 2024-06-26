import styled from "styled-components";
import {motion} from 'framer-motion'

export const MainContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  paddingTop: 25,

  "@media (max-height: 700px)": {
    maxHeight: "40vh",
  },
});

export const Container = styled.div({
  display: "flex",
  height: "41.9rem",
  width: "85%",
  position: "relative",

  "@media (max-height: 700px)": {
    maxHeight: "84vh",
  },
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

  "@media (max-height: 680px)": {
    fontSize: "15px",
  },
});

export const Details = styled.p({
  color: "#48d2af",
  zIndex: 0,
  fontFamily: "NetflixSans-Medium, sans-serif",
  position: "relative",
  marginLeft: "20px",
  fontSize: "18px",

  "@media (max-height: 680px)": {
    fontSize: "13px",
  },
});

export const SeeMore = styled.span({
  color: "#48d2af",
  cursor: "pointer",
});

export const MenuContainer = styled.div({
  backgroundColor: "#172431",
  border: "1px solid #ffffff",
  borderRadius: "10px",
  flexDirection: "column",
  height: "125%",
  zIndex: 100,

  "@media (max-height: 700px)": {
    height: "40%",
  },
  "@media (max-width: 400px)": {
    height: "136%",
  },
});

export const MotionMenuContainer = styled(motion.div)({
  position: "absolute",
  right: 16,
  height: "28.8%",
  width: "35.5%",
  zIndex: 100,
});

export const TabsMenuContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  marginTop: "5%"
});

export const ContainerSearchIconMenu = styled.div({
  display: "flex",
  justifyContent: "center",
  position: 'relative',
  marginTop: '10%'
});

export const InputSearchMenu = styled.input({
  width: "100px",
  outline: "none",
  border: "none",
  backgroundColor: "#2F3640",
  borderRadius: "10px",
  padding: "5px",
  height: "23px",
  fontWeight: 500,
  color: "#ffffff",
  fontFamily: "NetflixSans-Medium, sans-serif",
});

export const DefaultScreenContainer = styled.div({
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
      marginTop: "50%",
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
