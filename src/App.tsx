import React from 'react';
import './App.css';

import Card, { CardVar } from './components/cards';

function App() {

  return (
    <div className="App">
      <Card width='300px' height='300px' variant={CardVar.back} onClick={() => console.log('click')}>
        <button>Click</button>
      </Card>
    </div>
  );
}

export default App;
