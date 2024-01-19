import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteBox from './components/QuoteBox/QuoteBox';
import './styles/App.css';
import backendURL from './backendURL';

// +++ This is the parent App component that renders the entire app +++ //
// >>> It renders the QuoteBox component, which seperately renders the QuoteText, QuoteAuthor, and QuoteButtons components
// >>> It also renders the dark/light mode toggle button and the footer
// >>> It passes the loading state to the QuoteText component which renders a spinner while the data is being fetched from the backend

function App () {

  // _____ Hooks to setup state for current quote and author:
  const [ quote, setQuote ] = useState( '' );
  const [ author, setAuthor ] = useState( '' );
  const [ darkMode, setDarkMode ] = useState( false );
  const [ loading, setLoading ] = useState( true );

  //_____ Check if values are being received from server:
  /* useEffect(() => {
    console.log(quote, author);
  }, [quote, author]); */

  //_____ Fetch a quote on initial render:
  useEffect( () => {
    fetchQuote();
  }, [] );

  //_____ Function to fetch a new quote from the backend:
  const fetchQuote = async () => {
    setLoading( true );
    try {
      const res = await axios.get( backendURL + '/quotes' );
      setQuote( res.data.text );
      setAuthor( res.data.author );
      setLoading( false );
    } catch ( error ) {
      console.error( error );
    }
  };

  //_____ darkMode Toggle:
  const toggleDarkMode = () => {
    setDarkMode( prevDarkMode => !prevDarkMode );
  };

  //_____ Workaround to change CSS variables in the :root pseudo-class based on darkMode state:
  useEffect( () => {
    //--- quote-box box-shadow
    document.documentElement.style.setProperty( '--box-shadow', darkMode ? 'var(--box-shadow-dark)' : 'var(--box-shadow-light)' );

    //--- quote-buttons box-shadow
    document.documentElement.style.setProperty( '--quote-buttons-box-shadow', darkMode ? 'var(--quote-buttons-box-shadow-dark)' : 'var(--quote-buttons-box-shadow-light)' );

    //--- footer link colors:
    document.documentElement.style.setProperty( '--footer-link-color', darkMode ? 'var(--footer-link-color-dark)' : 'var(--footer-link-color-light)' );
    document.documentElement.style.setProperty( '--footer-link-hover-color', darkMode ? 'var(--footer-link-hover-color-dark)' : 'var(--footer-link-hover-color-light)' );
    document.documentElement.style.setProperty( '--footer-link-active-color', darkMode ? 'var(--footer-link-active-color-dark)' : 'var(--footer-link-active-color-light)' );
    document.documentElement.style.setProperty( '--footer-link-visited-color', darkMode ? 'var(--footer-link-visited-color-dark)' : 'var(--footer-link-visited-color-light)' );
  }, [ darkMode ] );


  return (
    <div className={darkMode ? 'App dark' : 'App light'}>

      <div className='container-fluid py-3 d-flex flex-column gap-4 align-items-center'>

        <button id='dk-lt-toggle-button' className='btn btn-sm align-self-end' onClick={toggleDarkMode}>

          {darkMode ? (
            <div className='d-flex gap-2'>
              <i class="bi bi-sun"></i>
              <i class="bi bi-toggle-on"></i>
              <i class="bi bi-moon-stars-fill"></i>
            </div>
          ) : (
            <div className='d-flex gap-2'>
              <i class="bi bi-sun-fill"></i>
              <i class="bi bi-toggle-off"></i>
              <i class="bi bi-moon"></i>
            </div>
          )}

        </button>

        <QuoteBox quote={quote} author={author} newQuote={fetchQuote} loading={loading} />

      </div>

      <footer>
        <p className='fs-6 mb-0'>
          Coded by <a
            href="https://github.com/Nix7amcm"
            target='_blank'
          >Nix7amcm⚡</a>
        </p>
      </footer>

    </div>
  );

}

export default App;
