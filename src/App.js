import { useState } from 'react';
import './App.css';
import DisplaySimpsonsQuotes from './components/DisplaySimpsonsQuotes';
import axios from 'axios';

const sampleQuote = [
  {
    quote: 'Marriage is like a coffin and each kid is another nail.',
    character: 'Homer Simpson',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
    characterDirection: 'Right',
  },
];

function App() {
  const [simpsonQuote, setSimpsonQuote] = useState(sampleQuote);

  const getSimpsonQuote = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data);
        setSimpsonQuote(data[0]);
      });
  };

  return (
    <div className='App'>
      <DisplaySimpsonsQuotes simpsonQuote={simpsonQuote} />
      <button type='button' onClick={getSimpsonQuote}>
        Get Simpson quote
      </button>
    </div>
  );
}

export default App;
