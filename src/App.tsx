import React from 'react';
import './App.scss';
import { RoutesObj as Routes } from './routes';
import { Sidebar } from './features/shared/Sidebar';

function App() {

  return (
    <div className="App">
      <Sidebar/>      
      <div id="pages">
        {Routes()}
      </div>
    </div>
  );
}

export default App;
