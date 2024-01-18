import React from 'react';
import './QuoteText.css';

// +++ Receives the current quote as a prop from the QuoteBox component and displays it +++ //

const QuoteText = ( { quote } ) => {

  return (

    <p id='text' className='quote-text text-center mb-0 fs-3 fw-light'>

      "{quote || 'Quote should appear here'}"

    </p>

  );

};

export default QuoteText;