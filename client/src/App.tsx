import React from 'react';
import './css/App.css';
import axios from 'axios';
import { useState } from 'react';


const Cards = [
  {id: 0, cImage: "ERW", setName:"ERE", number: "RE", rarity:"REER"},
  {id: 1, cImage: "FDS", setName:"RE", number: "RE", rarity:"RW"},
  {id: 2, cImage: "DFS", setName:"ERE", number: "RE", rarity:"ERWR3"}

]


export default function App() {
  const [search, setSearch] = useState("");
  const [CardsList, setCardsList] = useState([])

  function APIdata() {
    const data = {message: search};
    axios.post("http://localhost:3001/hello", data)
    .then(response => {
      setCardsList(response.data)
      console.log('Card', CardsList)
    })
  }

  function DisplayCards() {
    const cardArr = Cards.map(card => 
      <li className="Card" key={card.id}> {card.cImage} {card.number} </li>)
    return <ul className='cardList'> {cardArr} </ul>
  }

  function handleClick(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    setSearch(inputValue)
    console.log("Someone is typing", inputValue)
    APIdata()
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


