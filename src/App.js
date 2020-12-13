import React, { useState } from 'react'
import { fetchWeather } from './api/fetchWeather';

import './App.css'

const App = () => {
  const [query, setQuery] = useState('');

  const search = async (e) => {
    if(e.key === 'Enter') {
      const data = await fetchWeather(query);

      console.log(data);
    }
  }
  
  return (
    <div className="main-container">
      <h1></h1> 
      <input 
        type="text"
        className="search"
        placeholder="Where are you curious about the weather?"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyPress={search}
      />
    </div>
  )
}

export default App
