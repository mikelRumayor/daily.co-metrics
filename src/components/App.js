import React from 'react';

import Layout from 'Components/Layout';
import Router, { Redirect, Route } from 'Components/Router';
import Theme from 'Components/Theme';

import Rooms from 'Views/Rooms';

const App = () => (
  <Router>
    <Theme>
      <Route exact path="/">
        <Redirect to="/rooms" />
      </Route>
      <Layout>
        <Route component={Rooms} path="/rooms" />
      </Layout>
    </Theme>
  </Router>
);

export default App;
