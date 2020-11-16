import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import MealReducer from './reducers/MealReducer'
// import App from './App';
// import routineReducer from './reducers/routineReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(MealReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
  {/* <React.StrictMode> */}
  <Router>
    <App />
  {/* </React.StrictMode> */}
  </Router>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
