import React from 'react';
import './QuoteAuthor.css';

// +++ Receives the current author as a prop from the QuoteBox component and displays it. It remains hidden while the data is loading from the backend - a spinner is applied to the QuoteText element to display during the loading state +++ //

const QuoteAuthor = ( { author } ) => {

  return (
    <p id='author' className='quote-author mb-0 fs-4 fw-medium fst-italic'>
      {/* ~ {author || 'Author should appear here'} */}
      {/* {!loading ? author : <div className="" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>} */}
      {author}
    </p>
  );
};

export default QuoteAuthor;