import React from 'react';
import './Buttons.css';

// +++ "New Quote" button receives the fetchQuote function as a prop from the QuoteBox component calls it when clicked. 
// +++ "Tweet Quote" button when clicked opens a new tab to tweet the current quote and author.

const Buttons = ( { newQuote, quote, author } ) => {

  return (

    <div className='buttons'>

      <button
        id='new-quote'
        onClick={newQuote}
      >
        New Quote
      </button>

      <a
        id='tweet-quote'
        className='tweet-button'
        href={`https://twitter.com/intent/tweet?text=${quote} -${author}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        Tweet Quote
      </a>


    </div>

  );

};

export default Buttons;