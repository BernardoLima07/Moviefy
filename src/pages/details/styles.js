import styled from "styled-components";

export const Container = styled.div({
  img: {
    borderRadius: "1rem",
  },
  h2: {
    color: "#ffffff",
    lineHeight: '150%',
    marginBottom: "1rem",
    maxWidth: '80%'
  },
  button: {
    backgroundColor: 'yellow',
    padding: "2rem",
    borderRadius: "1rem",
    border: 'none',
    cursor: 'pointer',
    alignItems: 'center',
    textAlign: 'center',
  },

  ".details": {
    display: "flex",
    flexDirection: "column",
    marginLeft: "6rem",
    alignItems: "flex-start",
  },
});

export const Movie = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
