import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Home } from './features/01-home/home';
import { RoutesObj } from './routes';


function App() {
  return (
    <div className="App">
      {RoutesObj()}
    </div>
  );
}

export default App;
