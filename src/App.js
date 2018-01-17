import React, { Component } from 'react';
import Header from './Components/Header';
import ItemList from './Components/ItemList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ItemList />
      </div>
    );
  }
}

export default App;
