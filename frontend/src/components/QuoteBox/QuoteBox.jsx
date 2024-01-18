import React from 'react';
import QuoteText from '../QuoteText/QuoteText';
import QuoteAuthor from '../QuoteAuthor/QuoteAuthor';
import Buttons from '../QuoteButtons/QuoteButtons';
import './QuoteBox.css';

// +++ Receives the current quote, author, and fetchQuote function as props from the App component, and passes them down to child components
// +++ Displays the QuoteText, QuoteAuthor, and Buttons components

const QuoteBox = ( { quote, author, newQuote } ) => {
  return (

    <div id='quote-box' className='quote-box custom-max-w d-flex flex-column mt-4 p-4 gap-4 align-items-center border-5 rounded-4'>

      <i class="bi bi-chat-quote display-3"></i>

      <QuoteText quote={quote} />
      <QuoteAuthor author={author} />
      <Buttons newQuote={newQuote} quote={quote} author={author} />

    </div>

  );
};

export default QuoteBox;