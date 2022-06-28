import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import { projects } from './projects-array/projects.array';
import Main from './routers/main';

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}/>
        { projects.map(project => {
          return <Route path={project.name} element={project.project}/>
        })}
      </Routes>
    </div>
  );
}

export default App;
