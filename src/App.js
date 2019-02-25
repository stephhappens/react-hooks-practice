import React, { useEffect, useState } from 'react';
import Card from './components/Card';

const App = () => {
  // Create state
  // Initializing our state as an empty array
  const [cards, setCards] = useState([]);
  useEffect(() => {
    // Using localStorage instead of calling a server
    const data = JSON.parse(localStorage.getItem('data'));

    // Update to the card state with our new data from localStorage
    setCards(data);
  }, []);
  console.log(cards);
  return (
    <div>
    {
      /* Map over cards and spread localSession data into individual card component */
      cards.map((card, i) => <Card key={i} {...card} />)
    }
    </div>
  );
}

export default App;
