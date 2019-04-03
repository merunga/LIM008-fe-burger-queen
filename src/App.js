import React, { Component } from 'react';

import Layer from './components/Layer/Layer';
import MenuBuilder from './containers/MenuBuilder/MenuBuilder';

class App extends Component {
  render () {
    return (
      <div>
        <Layer>
          <MenuBuilder />
        </Layer>
      </div>
    );
  }
}

export default App;

