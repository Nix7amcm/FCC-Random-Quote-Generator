import React from 'react';
import './QuoteText.css';

// +++ Receive the current quote as a prop from the QuoteBox component and display it +++ //

const QuoteText = ( { quote } ) => {

  return (

    <p id='text'>
      {quote || 'Quote should appear here'}
    </p>

  );

};

export default QuoteText;