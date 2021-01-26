import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/hover-min.css'
import {
  RecoilRoot
} from 'recoil';

import Dashboard from "./components/Dashboard";

function App() {

  return (
    <RecoilRoot>
      <Dashboard/>
    </RecoilRoot>
  );
}

export default App;
