import React, { useState, useEffect, useRef } from 'react';
import WordCard from './WordCard';
import './App.css';


/*const word = "Hello"
const word2 = "World"
var comp = true;*/

function App() {

  const wordRand = () => {
      var text = ["Hello","world", "react", "great", "finish"];
      var i = Math.floor(Math.random() * 5);
      return text[i];
  }

  var word1 = wordRand();
  /*var word2 = wordRand();
  var word3 = wordRand();
  while(word1 == word2||word1 == word3||word2==word3){
      word1 = wordRand();
      word2 = wordRand();
      word3 = wordRand();
  }*/

  return (
    <div><WordCard value={word1}/></div>
    /*<div>
        <WordCard value={word1}/>
        <WordCard value={word2}/>
        <WordCard value={word3}/>
    </div>*/
  );
    
}

export default App;
