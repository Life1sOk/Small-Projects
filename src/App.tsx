import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import Main from './routers/main';
import BG from './projects-code/background-generator/background-generator';

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/background-generator' element={<BG />}/>
        <Route path='/project2' element={<BG />}/>
        <Route path='/project3' element={<BG />}/>
        <Route path='/project4' element={<BG />}/>
      </Routes>
    </div>
  );
}

export default App;
