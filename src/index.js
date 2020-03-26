import React from 'react';
import { render } from 'react-dom';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';

import App from 'Components/App';

setConfig({
  reloadHooks: false,
});

const Root = hot(App);

render(<Root />, document.getElementById('app'));
