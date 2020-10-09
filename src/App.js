import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  RecoilRoot
} from 'recoil';


import Dashboard from "./components/Dashboard";

function App() {

  return (
    <RecoilRoot>
      <div>
        <Dashboard/>
      </div>
    </RecoilRoot>
  );
}

export default App;
