import styled from "styled-components";
import { motion } from "framer-motion";


export const Container = styled.div({
  width: "100%",
  height: "8vh",
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  position: "static",
  borderBottom: "1px solid #ffffff",
});

export const Title = styled.h1({
  fontFamily: "NetflixSans-Medium, sans-serif",
  color: "#48d2af",
  marginLeft: "4%",
  cursor: "pointer",
});

export const TabsContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  marginInline: "25%",

  "@media screen and (max-width: 768px)": {
    display: "none",
  },
});

export const MenuButton = styled(motion.button)({
  border: '1px solid #ffffff',
  padding: '10px 100px 10px 10px',
  borderRadius: '10px',
  fontFamily: "NetflixSans-Medium, sans-serif",
  fontSize: '15px',
  color: '#ffffff',
  backgroundColor: '#172431',
  display: "none",
  cursor: "pointer",
  marginRight: "16px",
  marginTop: "6px",

  "@media (max-width: 768px)": {
    display: "initial",
  },
  "@media (max-width: 400px)": {
    display: "initial",
    padding: '5px 80px 5px 10px',
    fontSize: '15px',
  },
});

export const Tabs = styled.p(({ isSelected }) => ({
  color: "#ffffff",
  fontSize: "15px",
  cursor: "pointer",
  transition: "transform 0.25s ease-in-out, background-color 0.25s ease-in-out",
  fontFamily: "NetflixSans-Medium, sans-serif",
  backgroundColor: isSelected ? "#48d2af" : "none",
  borderRadius: "10px",
  padding: "5px",
  display: "inline-block",
}));

export const MotionTabs = styled(motion.p)({
  height: "25px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "15px",
});

export const ContainerSearchIcon = styled.div({
  backgroundColor: "#2F3640",
  borderRadius: "10px",
  padding: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "4%",

  "@media screen and (max-width: 768px)": {
    display: "none",
  },
});

export const InputSearch = styled.input({
  width: "100px",
  outline: "none",
  border: "none",
  background: "transparent",
  height: "23px",
  fontWeight: 500,
  color: "#ffffff",
  fontFamily: "NetflixSans-Medium, sans-serif",

  "@media screen and (max-width: 768px)": {
    display: "none",
    width: "100px",
  },
});

export const MenuIconStyledContainer = styled(motion.div)({

});

export const MenuIconStyled = styled.img({

});
