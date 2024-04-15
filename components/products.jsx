import React, { useEffect, useState } from 'react';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://panda-market-api.vercel.app/api/products')
      .then(data => {
        setCards(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <ul>
        
      </ul>
    </div>
  );
}


export default App;
