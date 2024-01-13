import React from 'react';
import QuoteText from '../QuoteText/QuoteText';
import QuoteAuthor from '../QuoteAuthor/QuoteAuthor';
import Buttons from '../Buttons/Buttons';
import './QuoteBox.css';

// +++ Receive the current quote, author, and fetchQuote function as props from the App component, and pass them down to child components +++ //

const QuoteBox = ( { quote, author, newQuote } ) => {
  return (

    <div id='quote-box'>
      <QuoteText quote={quote} />
      <QuoteAuthor author={author} />
      <Buttons newQuote={newQuote} quote={quote} author={author} />

    </div>

  );
};

export default QuoteBox;