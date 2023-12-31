const { json } = require('express');

function APIcall(query, topic) {
    const axios = require('axios');
    const apiUrl = 'https://api.scryfall.com/cards/search';

    Topic = {
        Year: 'year', 
        Shortcuts: 'is:', 
        Multi_Faced_Cards: 'is:', 
        Spells_Permanents_Effects: 'is:',
        Cubes:'cube:',
        ExactNames: '!',
        CardTypes: "t:",
        CardText: 'o:',
        ManaCosts: 'm:',
        Power: 'pow',
        Toughness: 'tow',
        Loyalty: 'loy',
        Colors: "c:"
    
    }

    const customQuery = Topic[topic] + query
    console.log(customQuery)


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
            // console.log(data)
            // Process and collect the card data as needed
            cards.forEach(card => {
                const jsonData = {
                    'id': card.id,
                    'Card Name': card.name,
                    'Set Name': card.set_name,
                    'Card Number': card.collector_number,
                    'Rarity': card.rarity,
                    'imageUrl': card.image_uris['small']

                };
                // console.log(imageUrl);

                cardDataArray.push(jsonData); // Add card data to the array
            });

            console.log(cardDataArray)

            return cardDataArray; // Return the array of card data
        } else {
            console.log('No matching cards found.');
            return -1; // Return null or an empty array if no cards are found
        }
    })
    .catch(error => {
        return -1; // Handle errors and return an appropriate value
    });
}


module.exports = { APIcall }
