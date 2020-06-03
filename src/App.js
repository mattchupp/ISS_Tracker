import React from 'react';
import PassTimes from './PassTimes';
import styled from 'styled-components'; 

const Container = styled.div`
  display: flex; 
  height: 100vh; 
  width: 100%; 
  justify-content: center; 
  align-items: center; 
`;

function App() {
  return (
    <Container>
      <PassTimes />
    </Container>
  );
}

export default App;
