import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layer from './components/Layer/Layer';
import MenuBuilder from './containers/MenuBuilder/MenuBuilder';
import OrderSection from './containers/OrderSection/OrderSection';

const app = () => (
  <Layer>
    <Switch>
      <Route path="/orders" component={OrderSection} />
      <Route path="/" exact component={MenuBuilder} />
    </Switch>
  </Layer>
);

export default app;
