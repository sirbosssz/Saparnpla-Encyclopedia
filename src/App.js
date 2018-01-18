import React, { Component } from 'react';
import Header from './Components/Header';
import ItemList from './Components/ItemList';
import Popup from './Components/Popup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Popup />
        <Header />
        <ItemList />
      </div>
    );
  }
}

export default App;
