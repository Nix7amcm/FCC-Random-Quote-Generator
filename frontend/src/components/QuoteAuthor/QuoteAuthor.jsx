import React from 'react';
import './QuoteAuthor.css';

// +++ Receive the current author as a prop from the QuoteBox component and display it +++ //

const QuoteAuthor = ( { author } ) => {

  return (

    <p id='author'>
      {author || 'Author should appear here'}
    </p>

  );

}

export default QuoteAuthor;