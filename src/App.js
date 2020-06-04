import React from 'react';
import PassTimes from './PassTimes';
import CurrentLocation from './CurrentLocation'
import Home from './components/Home';
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
            <Home />
          </Route>

          <Route exact path="/times">
            <PassTimes />
          </Route>

          <Route exact path="/location">
            <CurrentLocation />
          </Route>

        </Switch>
      </Router>
    </Container>
  );
}

export default App;
