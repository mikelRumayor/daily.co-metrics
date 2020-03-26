import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  generatePath,
  Link,
  matchPath,
  NavLink,
  Switch,
  Redirect,
  Route,
  withRouter,
} from 'react-router-dom';

const Router = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

Router.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export {
  generatePath,
  Link,
  matchPath,
  NavLink,
  Redirect,
  Route,
  Switch,
  withRouter,
};

export default Router;
