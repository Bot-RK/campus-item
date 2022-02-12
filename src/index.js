import React from 'react';
import ReactDOM from 'react-dom'; 
import { BrowserRouter } from "react-router-dom";
import Routess from './routes'
ReactDOM.render(
  <BrowserRouter>
    <Routess />
    </BrowserRouter>,
  document.getElementById('root')
)

