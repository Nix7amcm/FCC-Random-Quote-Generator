import React from 'react';
import './QuoteAuthor.css';

// +++ Receives the current author as a prop from the QuoteBox component and displays it +++ //

const QuoteAuthor = ( { author } ) => {

  return (

    <p id='author' className='quote-author mb-0 fs-4 fw-medium fst-italic'>

      ~ {author || 'Author should appear here'}

    </p>

  );

}

export default QuoteAuthor;