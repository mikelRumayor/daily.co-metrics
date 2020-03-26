import React from 'react';

import Router, { Redirect, Route } from 'Components/Router';
import Theme from 'Components/Theme';

import Rooms from 'Views/Rooms';

const App = () => (
  <Router>
    <Theme>
      <Route exact path="/">
        <Redirect to="/rooms" />
      </Route>
      <Route component={Rooms} path="/rooms" />
    </Theme>
  </Router>
);

export default App;
