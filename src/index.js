import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './Bootstrap/bootstrap-grid.min.css';
import './Fonts/font.css';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import mainReducer from './redux.reducers';

let store = createStore(mainReducer);
console.log('beginning store', store.getState());

store.subscribe(() => {
  console.log('update', store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root')
);
registerServiceWorker();
