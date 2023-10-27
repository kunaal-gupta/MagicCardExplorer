const axios = require('axios');

// Define the API endpoint
const apiUrl = 'https://api.scryfall.com/cards/search';

// Define your custom fulltext search query
const customQuery = "is:dual";

// Make the GET request
axios.get(apiUrl, {
  params: {
    q: customQuery,
    format: 'json', // You can specify the desired format (json or csv)
  },
})
  .then(response => {
    // Handle the response data
    const data = response.data;

    if (data.object === 'list') {
      const cards = data.data;
      // Process and display the card data as needed
      cards.forEach(card => {
        console.log('Card Name:', card.name);
        console.log('Set Name:', card.set_name);
        console.log('Card Number:', card.collector_number);
        console.log('Rarity:', card.rarity);
        console.log('---');
      });
    } else {
      console.log('No matching cards found.');
    }
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
