import React, { useEffect } from 'react';
import './css/App.css';
import axios from 'axios';
import { useState } from 'react';


const CardsArr = [
  {id: "", cImage: "", setName:"", number: "", rarity:""},
  ]


export default function App() {
  const [search, setSearch] = useState("");
  const [Cards, setCardsList] = useState(CardsArr)
    
  function APIdata(message: string) {
    const data = {message: message};

    axios.post("http://localhost:3001/hello", data)
    .then(response => {
      if (response.data === -1){
        alert('no result')
      }
      setCardsList(response.data)
      
      console.log('Card', Cards)
      console.log(1, response.data)
    })
  }

  function DisplayCards() {
    const cardArr = Cards.map(card => 
      <li className="Card" key={card.id}> {card.cImage} {card.number} </li>)

    return <ul className='cardList'> {cardArr} </ul>
  }

  function handleClick(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    setSearch(inputValue);
    console.log("Someone is typing", inputValue, search);
    APIdata(inputValue);
  }



  return (
    <>
    <div className="App">
      <input className= 'inputBar' onInput={handleClick} placeholder='Enter your text here' type='text' />

    </div>
    <DisplayCards />

  </>
  );
}