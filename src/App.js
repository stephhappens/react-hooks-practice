import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Curried function to see if a card's name matches a search term
const findMatch = term => card => card.name.toLowerCase().includes(term.toLowerCase());

const App = () => {
  // Create state
  // Initializing our state as an empty array
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(async () => {
    setLoading(true);

    // Emulate delay from a server
    await delay(1200);

    // Using localStorage instead of calling a server
    const data = JSON.parse(localStorage.getItem('data'));

    // Update to the card state with our new data from localStorage
    setCards(data);
    setLoading(false);
  }, []);
  
  // Filter cards to match user input
  const filtered = cards.filter(findMatch(search));

  return (
    <div>
      <Header searchText={search} onChange={setSearch} />
      {loading && 'Loading'}
    {
      /* Map over cards and spread localSession data into individual card component */
      filtered.map((card, i) => <Card key={i} {...card} />)
    }
    </div>
  );
}

export default App;
