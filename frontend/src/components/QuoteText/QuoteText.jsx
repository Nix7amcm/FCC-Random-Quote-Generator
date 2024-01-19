import React from 'react';
import './QuoteText.css';

// +++ Receives the current quote and loading state as props from the QuoteBox component. It displays a spinner while the data is loading and the quote text once it is received from the backend +++ //

const QuoteText = ( { quote, loading } ) => {

  return (
    <p id='text' className='quote-text text-center mb-0 fs-3 fw-light'>
      {/* "{quote || 'Quote should appear here'}" */}
      {!loading ? quote :
        <div className='spinner-border mt-4' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>}
    </p>
  );

};

export default QuoteText;