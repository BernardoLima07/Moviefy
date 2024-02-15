import styled from "styled-components";

export const Container = styled.div({
  width: '100%',
  height: '8vh',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'static'
})

export const Title = styled.h1({
  fontFamily: "NetflixSans-Medium, sans-serif",
  color: "#48d2af",
  marginLeft: "4%",
});

export const TabsContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "30%",
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

  "&:hover": {
    transform: "scale(1.2)",
  },
}));

export const ContainerSearchIcon = styled.div({
  background: "#2F3640",
  borderRadius: "10px",
  padding: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "4%",
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
});
