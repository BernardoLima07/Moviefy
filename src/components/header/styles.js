import styled from 'styled-components';

export const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#e9b222',
  marginBottom: '30px',
  h1: {
    position: 'relative',
    textAlign: 'center',
    margin: '1.3rem',
    color: '#ffffff',
  },
  input: {
    borderRadius: '1rem',
    border: 'none',
    margin: '1.3rem 3rem',
    height: '1.7rem',
  }
})