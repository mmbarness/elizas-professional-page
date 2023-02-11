import React from 'react';
import './App.scss';
import { RoutesObj as Routes } from './routes';
import { Sidebar } from './features/shared/Sidebar';
import useMediaQuery from './utils/useMediaQuery';

function App() {

    const orientation = useMediaQuery("(orientation: landscape)") ? "landscape" : "portrait";

    return (
        <div className={`App ${orientation}`}>
        <Sidebar/>      
        <div id="pages">
            {Routes()}
        </div>
        </div>
    );
}

export default App;
