import React, { Component } from 'react';
 import Items from '../Items';

export class Tabs extends Component {

  filterMenu = () => this.props.menu.filter(item => item.category === 'breakfast')

  render() {
    return (
     <div>
      {this.filterMenu().map(item => {
        return <Items key={item.id} menu={item} />
      })}
     </div>
    );
  };
};

export default Tabs;
