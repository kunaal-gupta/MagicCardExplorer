const { json } = require('express');

function APIcall(query) {
    const axios = require('axios');
    const apiUrl = 'https://api.scryfall.com/cards/search';
    const customQuery = "is:dual";

    return axios.get(apiUrl, {
        params: {
            q: customQuery,
            format: 'json',
        },
    })
    .then(response => {
        const data = response.data;

        if (data.object === 'list') {
            const cards = data.data;
            const cardDataArray = []; // Create an array to store card data

            // Process and collect the card data as needed
            cards.forEach(card => {
                const jsonData = {
                    'Card Name': card.name,
                    'Set Name': card.set_name,
                    'Card Number': card.collector_number,
                    'Rarity': card.rarity
                };
                cardDataArray.push(jsonData); // Add card data to the array
            });

            return cardDataArray; // Return the array of card data
        } else {
            console.log('No matching cards found.');
            return null; // Return null or an empty array if no cards are found
        }
    })
    .catch(error => {
        console.error('An error occurred:', error);
        return null; // Handle errors and return an appropriate value
    });
}


module.exports = { APIcall }
