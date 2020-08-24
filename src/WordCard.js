import React, { useState } from 'react';
import _, { attempt, set } from 'lodash';
import CharacterCard from './CharacterCard';
import Lose from './Lose';
import Win from './Win';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

const maxAttempt = 3;

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))
    
    const activationHandler = c => {
        console.log(`${c} has been activated.`)

        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah!')
                setState({...state, guess: '', completed: true})
                
            }else{
                console.log('reset, next attempt')
                console.log('attempt = %d',state.attempt)
                setState({...state, guess: '', attempt: state.attempt + 1})
            }
        
        }
    }

    if(state.attempt>maxAttempt){
        return (
            <Lose></Lose>
        )
    }
    if(state.completed){
        return (
            <Win></Win>
        )
    }
    else{
        return (
            <div>
                {
                    state.chars.map((c, i) => 
                        <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                        )
                }
            </div>
        )
    }
    
}
