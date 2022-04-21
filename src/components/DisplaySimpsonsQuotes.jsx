import React from 'react';

function DisplaySimpsonsQuotes(props) {
  const infos = props.simpsonQuote;
  console.log(props);
  const { quote, character, image, characterDirection } = infos;
  return (
    <div className='DisplaySimpsonsQuotes'>
      <ul>
        <li>Quote: {quote}</li>
        <li>
          <img src={image} alt='Simpson character' />
        </li>
        <li>Character: {character}</li>
        <li>Direction: {characterDirection}</li>
      </ul>
    </div>
  );
}

export default DisplaySimpsonsQuotes;
