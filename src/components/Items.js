import React, { Component } from 'react'
import './layout/layout.css';

class Items extends Component {
  render() {
    const { name, price } = this.props.menu;
    return (
      <div className="items">
        <button onClick="agregar">+</button>
        <p>{ name }</p>
        <p>Precio: ${ price }</p>
      </div>
    )  
  }
}

export default Items;




// {this.filterMenu().map(item => {
//   return <Items key={item.id} menu={item} />
// })}


// return this.props.menu.map(item => (
//   <div>
//    <button>Desayuno</button>
//    <Items key={item.id} menu={item} filterMenu={this.props.filterMenu} />
//   </div>
// ));



// export class Tabs extends Component {
//   filterMenu = category => this.props.menu.filter(item => item.type === category)
//   result = () => {
//      return this.filterMenu('breakfast').map(item => {
//       //  console.log(item)
//       return <Items key={item.id} menu={item} />
//      })
//     }
  
//   render() {
//     return (
//       <div>
//         <button onClick={this.result}>Desayuno</button>
//         {/* <button onClick={}>Menú</button>
//         <button onClick={}>Bebidas</button> */}
//       </div>
//     )
//   };
// };

// export default Tabs;