import React, { useEffect } from 'react';
import './css/App.css';
import axios from 'axios';
import { useState } from 'react';


const CardsArr = [
  {id: "0", cImage: "0", setName:"0", number: "0", rarity:"0"},
  ]


export default function App() {
  var [search, setSearch] = useState("");
  var [Cards, setCardsList] = useState(CardsArr)
  const [isHidden, setIsHidden] = useState(false);

    
  function APIdata(message: string) {
    const data = {message: message};
    console.log(data)
    axios.post("http://localhost:3001/hello", data)

    .then(response => {
      if (response.status != 200){
        alert('no result')

      }
    setCardsList(response.data)
    console.log('f', Cards)
    console.log(response.data)
  
    }) 
  }

  function DisplayCards() {
    return (
      <ul className='cardList'>
        {Cards.map((card: { [key: string]: any }) => (
          <li className="Card" key={card.id}>
            <div>
              <strong>Card Name:</strong> {card['Card Name']}
            </div>
            <div>
              <strong>Set Name:</strong> {card['Set Name']}
            </div>
            <div>
              <strong>Card Number:</strong> {card['Card Number']}
            </div>
            <div>
              <strong>Rarity:</strong> {card['Rarity']}
            </div>
          </li>
        ))}
      </ul>
    );
  }
  
  
  function handleClick(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    setSearch(inputValue);

    setTimeout(() => {
      setIsHidden(isHidden);
      console.log("Someone is typing", inputValue);
      APIdata(inputValue);

    }, 1000)
    setIsHidden(!isHidden);

  
    let a = async () => {setCardsList([])}
    a()
  }


  return (
    <>
      <div>
        <div className="App">
          <input className= 'inputBar' onInput={handleClick} placeholder='Enter your text here' type='text' />
          <div className={!isHidden ? 'hidden' : 'loader'}></div>

        </div>

        <DisplayCards />
      </div>
    </>
  );
}