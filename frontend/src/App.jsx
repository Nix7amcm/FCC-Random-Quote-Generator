import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteBox from './components/QuoteBox/QuoteBox';
import '../styles/App.css';

// +++ This is the root component. It contains the state (current quote and author), the function to fetch a new quote from the backend, and renders the QuoteBox component +++ //

function App () {

  // --- Hooks to setup state for current quote and author:
  const [ quote, setQuote ] = useState( '' );
  const [ author, setAuthor ] = useState( '' );

  //--- Hook to check if values are being received from server:
  /* useEffect(() => {
    console.log(quote, author);
  }, [quote, author]); */

  //--- Hook to fetch a quote on initial render:
  useEffect( () => {
    fetchQuote();
  }, [] );

  //--- Function to fetch a new quote from the backend:
  const fetchQuote = async () => {
    try {
      const res = await axios.get( 'http://localhost:5000/quotes' );
      setQuote( res.data.text );
      setAuthor( res.data.author );
    } catch ( error ) {
      console.error( error );
    }
  };


  return (
    <div className='App'>

      <QuoteBox quote={quote} author={author} newQuote={fetchQuote} />
      
    </div>
  );

}

export default App;
