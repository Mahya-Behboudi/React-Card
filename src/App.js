import React from 'react';
import './App.scss';
// components
import CardA from './Components/CardA';
import CardB from './Components/CardB/CardB';

function App() {
  return (
    <div className='container'>
      <CardB></CardB>
      <CardA/>
    </div>
  )
}

export default App;
