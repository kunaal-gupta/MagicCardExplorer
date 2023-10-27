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
  const [selectedTopic, setSelectedTopic] = useState('');
  const [disabled, setdisability] = useState(true);



  const MagicDropdown = () => {
  
    const topics = [
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

    ];

 
    const handleTopicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedTopic(event.target.value);
      console.log(event.target.value)
      if (event.target.value == ""){
        setdisability(true)} else{
          setdisability(false)
        }
    };
  
    return (
      <div>
        <select className='TopicDropdown' onChange={handleTopicChange} value={selectedTopic} required>
          <option value="">Select a topic</option>
          {topics.map((topic, index) => (
            <option key={index} value={topic}>
              {topic}
            </option>
          ))}
        </select>
  
      </div>
    );
  };
  
      
  function APIdata(message: string) {
    const data = {message: message, Topic: selectedTopic};
    console.log(data)
    axios.post("http://localhost:3001/apidata", data)

    .then(response => {
      if (response.status != 200){
        alert('no result')

      }
    setCardsList(response.data)
  
    }) 
  }

  function DisplayCards() {
    return (
      <ul className='cardList'>
        {Cards.map((card: { [key: string]: any }) => (
          <li className="Card" key={card.id}>
            <div style={{display:'flex', alignItems:'flex-start'}}>
              <img src={card['imageUrl']} width={'100vw'} height={'200vh'}/>
              <div className='CardDetails' style={{marginLeft: "2%"}}>
                <div>
                  <strong>Card Name:</strong> {card['Card Name']}
                </div><br></br>
                <div>
                  <strong>Set Name:</strong> {card['Set Name']}
                </div>
                <div>
                  <strong>Card Number:</strong> {card['Card Number']}
                </div>
                <div>
                  <strong>Rarity:</strong> {card['Rarity']}
                </div>


              </div>
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

          <div style={{display: 'flex', justifyContent: "center", alignContent: 'center'}}>
            < MagicDropdown />
            <input className= 'inputBar' onInput={handleClick} disabled = {disabled} placeholder='Enter the query to search cards' type='text' />
          </div>

          <div className='insText'>"First Select the category and then enter query (without) keyword"</div>
          <div className={!isHidden ? 'hidden' : 'loader'}></div>

        </div>

        <DisplayCards />
      </div>
    </>
  );
}