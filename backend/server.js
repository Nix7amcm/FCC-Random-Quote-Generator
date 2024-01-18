const express = require( 'express' );
const axios = require( 'axios' );
require( 'dotenv' ).config({ path: '../.env'});
const cors = require( 'cors' );

const app = express();
app.use( cors() );

const port = process.env.PORT || 5000;


app.get( '/quotes', async ( req, res ) => {

  const options = {
    method: 'GET',
    url: 'https://famous-quotes4.p.rapidapi.com/random',
    params: {
      category: 'motivational',
      count: '1'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
    }
  };

  try {

    const response = await axios.request( options );
    // >>> Ensure the data structure matches what's returned from the API:
    const quoteData = response.data[ 0 ]; //--- get the first object in the returned array
    const quote = quoteData.text; //--- get the quote text
    const author = quoteData.author; //--- get the quote author
    res.json( { text: quote, author: author } );

  } catch ( error ) {
    console.error( error );
    res.status( 500 ).json( {
      error: 'An error occurred while retrieving quote'
    } );
  }
} );


app.listen( port, () => {
  console.log( `Server is running on port: ${port}` );
} );