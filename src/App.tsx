import React from 'react';
import './App.scss';
import { Home } from './features/01-home/home';
import { RoutesObj } from './routes';
import { Sidebar } from './features/shared/Sidebar';
import { useGetSlugsQuery } from './features/shared/sanityAPI';

function App() {

  return (
    <div className="App">
      <Sidebar/>      
      <div id="pages">
        {RoutesObj()}
      </div>
    </div>
  );
}

export default App;
