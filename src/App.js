import React, { useState, useEffect } from 'react';
import './App.css';
import User from './components/user';
import Header from './components/layout/Header';
import Tabs from './components/layout/Tabs';
import ProductList from './components/ProductList';
// import Amount from './components/order';



function App() {
  const [menu, setMenu] = useState([]);
  let [options, setOptions] = useState('');
  // const [filter] = useState('');
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/cinthyasegura/LIM008-fe-burger-queen/2ba3df5cbef051f1557745e2e24645d44a33375e/src/data/menu.json')
    .then(resp => resp.json())
    .then(data => {
      setMenu(menu.concat(data))  
      setOptions(options = 'breakfast')
    }) 
  }, []);

  const filteredList = filter => {
    return setOptions(options = filter);
   }
  return (
          <div>
            <Header />
            <Tabs filtered={options} onclick={filteredList} />
           <ProductList menu={menu.filter(item => item.category === options)}/>
            <User />
          </div>
     
        )
}


// class App extends Component {

//   state = {
//     menu: [],
//     filter: ''
//   };
//   componentDidMount() {
    
//   }
//   filteredList = filter => {
//     return this.setState({filter: filter})
//   }


//   render() {
//     return (
//       <div>
//         <Header />
//         <Tabs filtered={this.state.filter} onclick={this.filteredList} />
//         <ProductList menu={this.state.menu.filter(item => item.category === this.state.filter)}/>
//         <User />
//         <Amount />
        
//       </div>
//     )
//   }
// }

export default App



