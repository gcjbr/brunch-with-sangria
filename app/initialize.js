import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Counter from './components/counter';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const App = () =>
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Counter />
  </Provider>;


ReactDOM.render(<App />, document.querySelector('#app'));
