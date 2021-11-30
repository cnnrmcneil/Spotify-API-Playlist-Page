import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DataLayer } from './Components/DataLayer';
import reducer, { initialState } from './Components/Reducer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <DataLayer initialState={initialState} reducer={reducer}>
    <App />
    </DataLayer>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to    measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
