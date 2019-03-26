import React from 'react';
import { hot } from 'react-hot-loader';

import Mapview from 'components/mapview/mapview';

import './app.scss';

const App = () => (
  <div className="container">
    <Mapview />
  </div>
);

export default hot(module)(App);
