import React from 'react';
import './QuoteButtons.css';

// +++ "New Quote" button receives the fetchQuote function as a prop from the QuoteBox component calls it when clicked
// +++ "Tweet Quote" button when clicked opens a new tab to tweet the current quote and author

const Buttons = ( { newQuote, quote, author } ) => {

  return (

    <div className='buttons d-flex flex-wrap justify-content-center'>

      <button
        id='new-quote'
        className='quote-buttons btn m-2 custom-styles'
        type='button'
        onClick={newQuote}
      >
        <i class="bi bi-arrow-clockwise me-2"></i>
        New Quote
      </button>

      <a
        id='tweet-quote'
        className='quote-buttons btn m-2 custom-styles'
        href={`https://twitter.com/intent/tweet?text=${quote} -${author}`}
        role='button'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i class="bi bi-twitter-x me-2"></i>
        Tweet Quote
      </a>


    </div>

  );

};

export default Buttons;