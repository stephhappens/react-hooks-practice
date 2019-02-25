import React, { Component } from 'react';
import Card from './components/Card';

const mockdata = {
  name: 'Clark',
  items: [
    'Bad Boys 2 Box Set', 
    'Aluminum Ingot'
  ]
}

const App = () => {
  
  return (
    <div>
      <Card {...mockdata} />
    </div>
  );
}

export default App;
