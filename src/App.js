import React from 'react';
import WordCard from './WordCard';
import './App.css';

const word = "Hello"
function App() {
  return (
    <div>
        <WordCard value={word}/>
    </div>
  );
}

export default App;
