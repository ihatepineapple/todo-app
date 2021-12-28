import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DATA from './data.json';


import { BrowserRouter as Router } from "react-router-dom";
import ReactBreakpoints from 'react-breakpoints';
 
const breakpoints = {
  mobile: 375,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920,
}


ReactDOM.render(
<ReactBreakpoints breakpoints={breakpoints}>
  <Router>
    <App tasks={DATA} />
  </Router>
</ReactBreakpoints>,


  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
