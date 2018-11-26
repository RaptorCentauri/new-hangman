import "babel-polyfill";
import './index.scss'

import { render } from 'react-dom';
import React from 'react';

import Hangman from '../gameLogic/game.js'
import {Score, Word, HangmanImage, WrongLetters} from './components/index.js'

class App extends React.Component {
    game = new Hangman(['Roy Harper', 'Spider-Man', 'Batman'])

    state = {
      blankWord: '',
      wrongLetters: [],
      playing: true
    }


handleKeyPress = (event) => {
    let guess = event.key;

    if(event.code === "Space" && !this.state.playing){

      this.game.startNewRound()
      this.setState({blankWord: this.game.blankVisibles})
      this.setState({lives: this.game.lives})

      let wrongArr = [...this.game.wrongLetters.values()]
      this.setState({wrongLetters: wrongArr})
      this.setState({playing: true})
    }

if(this.state.playing){
    if (/^[a-zA-Z]{1}$/.test(guess)){
          this.game.checkForLetter(event.key)
          this.setState({blankWord: this.game.blankVisibles})


          let wrongArr = [...this.game.wrongLetters.values()]

          this.setState({wrongLetters: wrongArr})

          this.setState({lives: this.game.lives})
          // this.setState({gameOver: this.game.gameOver})
          this.setState({wins: this.game.wins})
          this.setState({losses: this.game.losses})
    }
  }


  }


componentDidUpdate(prevProps, prevState){
  if(prevState.wins != this.state.wins){
    this.setState({playing: false})
  }

  if(prevState.losses != this.state.losses){
    this.setState({playing: false})
  }
}


componentWillMount() {
    this.game.initializeGame()
    this.setState({blankWord: this.game.blankVisibles})
    this.setState({lives: this.game.lives})
    this.setState({gameOver: this.game.gameOver})
    this.setState({wins: this.game.wins})
    this.setState({losses: this.game.losses})


  }

componentDidMount() {
    window.addEventListener('keyup', this.handleKeyPress);
}

  render() {
        return (
            <div className='App'>
              <Word playing={this.state.playing} word={this.state.blankWord}/>
              <WrongLetters wrongLetters={this.state.wrongLetters}/>
              <HangmanImage lives={this.state.lives}/>
              <Score wins={this.state.wins} losses={this.state.losses}/>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById('root'));
