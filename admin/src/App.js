import axios from 'axios';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <button onClick={()=>{axios.get('https://vamosvamosvamos.herokuapp.com/login').then(respons=> console.log(respons))}}>amin</button>
    </div>
  );
}

export default App;
