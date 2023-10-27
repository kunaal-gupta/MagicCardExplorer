import React from 'react';
import './css/App.css';
import axios from 'axios';

function App() {

  function APIdata() {
    const data = {message: 'Active user details'};
    axios.post("http://localhost:3001/hello", data)
    .then(response => {
      console.log(response.data)
    })
    console.log(data)
  }

  APIdata()

  return (
    <div className="App">
      <input className= 'inputBar' placeholder='Enter your text here' type='text' />
    </div>
  );
}


export default App;
