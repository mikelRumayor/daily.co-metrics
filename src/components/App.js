import React from 'react';

import Router, { Redirect, Route } from 'Components/Router';
import Theme from 'Components/Theme';

const App = () => (
  <Router>
    <Theme>
    <Route exact path="/">
      <Redirect to="/rooms" />
    </Route>
      <Route component={() =>  <h1>Daily.js</h1>} path="/rooms" />
    </Theme>
  </Router>
)

export default App