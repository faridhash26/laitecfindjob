import React from 'react';

import './Vendor';
import './assets/styles/Style.scss'
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';



function App() {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
