import React, { Component } from 'react';
//  import Items from '../Items';

const Filter = ({ onclick }) => {
  return (
    <ul>
      <li onClick={() => onclick('breakfast')}>Desayuno</li>
      <li onClick={() => onclick('hamburger')}>Menú</li>
      <li onClick={() => onclick('drinks')}>Bebidas</li>
    </ul>
  )
}
export default Filter;




// export class Tabs extends Component {

//   filterMenu = () => this.props.menu.filter(item => item.category === 'breakfast')

//   render() {
//     return (
//      <div>
//       {this.filterMenu().map(item => {
//         return <Items key={item.id} menu={item} />
//       })}
//      </div>
//     );
//   };
// };

// export default Tabs;
