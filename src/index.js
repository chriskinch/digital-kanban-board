import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ticketApp from './reducers';
import { addTicket, completeTodo, setVisibilityFilter, visibilityFilters } from './action';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(ticketApp);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(addTicket('lol'));

console.log(store.getState());

registerServiceWorker();