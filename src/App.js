import { useState } from 'react';
import './App.css';

function App() {
  const [query,setQuery]=useState("");
  const [definition,setDefinition]=useState("")
  const [dictionary, setDictionary]=useState(
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]
)

console.log(dictionary)

  const handleSearch= ()=>{

    const res =dictionary.find(x=>x.word.toLowerCase()===query.toLowerCase())

    setDefinition(res? res.meaning: "Word not found in the dictionary.")

  }
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input 
      type='text' 
      placeholder='Search for a word...'
      value={query}
      onChange={(e)=>setQuery(e.target.value)}>
      </input>
      <button onClick={handleSearch}>Search</button>
      <h3>Definition:</h3> <p>{definition}</p>
    </div>
  );
}

export default App;
