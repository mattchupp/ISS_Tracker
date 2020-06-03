import React from 'react';
import PassTimes from './PassTimes';
import styled from 'styled-components'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
      <Router>
        <Switch>
          <Route exact path="/">
            <Link to="/times">See passover times</Link>
          </Route>
          <Route exact path="/times">
            <PassTimes />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
