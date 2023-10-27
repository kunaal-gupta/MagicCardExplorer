# Design Decisions and Thoughts


# Client Side Folder:

-  HandleClick Function: This function is responsible for managing user input edits in the search bar.

- DisplayCards Function: This function renders a list of cards from the Cards Array. It displays card details such as card name, set name, card number, rarity, and an image on the webpage.

- APIdata Function: This function receives the selected category and user input query as parameters. It fetches the corresponding cards from the server-side API and structures the data for display.

- CategoryDropdown Function: This function renders a list of available categories on the webpage.

## Running Client side
```
cd client
npm start
```

# Server Side Folder:

- cardAPI.js: This file contains functions and logic for triggering API calls to ScryFall. It is responsible for fetching data related to the queried cards from the ScryFall API.

- server.js: This file controls the server-side of the project and runs on port 3001. It handles incoming requests from the client, interacts with the cardAPI.js file to fetch data, and serves the data to the client for display.

## Running Server side
```
npm start
```

## Restart Server Side
```
rs
```


# API ScryFall

- It takes in the query & fetches the list of cards based on the input query & choosen category

- Controls the API call per sec by using setTimeout function in Apps.tsx


# Note

Due to time restriction on number of API calls per second, server side some times  requires a restart before entering a new query

Due to limited time & university exams, I'm only able to work of following categories:

      'Colors',
      'CardTypes',
      'CardText',
      'ManaCosts',
      'Power',
      'Multi_Faced_Cards',
      'Spells_Permanents_Effects',
      'Cubes',
      'Year',
      'Shortcuts',
      'ExactNames',
      'Toughness',
      'Loyalty.'
