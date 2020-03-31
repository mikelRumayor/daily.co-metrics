import React from 'react';

import Router, { Redirect, Route } from 'Components/Router';
import Theme from 'Components/Theme';

import Live from 'Views/Live';
import Rooms from 'Views/Rooms';

/*
  App is the root component which leverages main application routes
*/
const App = () => (
  <Router>
    <Theme>
      <Route exact path="/">
        <Redirect to="/rooms" />
      </Route>
      {/* Rooms provides create, list of rooms and stats routes */}
      <Route component={Rooms} path="/rooms" />
      {/* Live provides video streaming */}
      <Route component={Live} path="/live/:id" />
    </Theme>
  </Router>
);

export default App;
