
import React from 'react';
import './App.css';

import Layout from './Component/Layout/Layout';

import { BrowserRouter, Route } from 'react-router-dom';
import adminPortal from './Admin/Admin.js';

function App() {
  return (
    
      <BrowserRouter>
        <Route path='/' exact component={Layout} />
        <Route path='/admin' component={adminPortal} />
      </BrowserRouter>
    
  );
}

export default App;

// todo: 

//font change
// overview
// photos change
// event layout
// footer
