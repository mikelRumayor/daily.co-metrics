import React from 'react';

import Layout from 'Components/Layout';
import Router, { Redirect, Route } from 'Components/Router';
import Theme from 'Components/Theme';

import Live from 'Views/Live';
import Rooms from 'Views/Rooms';

const App = () => (
  <Router>
    <Theme>
      <Route exact path="/">
        <Redirect to="/rooms" />
      </Route>
      
      <Route component={Live} path="/live/:id" />
    </Theme>
  </Router>
);

export default App;
