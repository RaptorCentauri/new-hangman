import './index.scss'

import { render } from 'react-dom';
import React from 'react';

import Hangman from './gameLogic/game.js'
import Score from './components/Score/Score';
import Word from './components/Word.js'
import HangmanImage from './components/HangmanImage/HangmanImage'
import WrongLetters from './components/WrongLetters/WrongLetters.js'

class App extends React.Component {
    game = new Hangman(['Roy Harper', 'Spider-Man', 'Batman'])

    state = {
      blankWord: '',
      wrongLetters: [],
      lives: 0

    }


handleKeyPress = (event) => {

    let guess = event.key;


    if (/^[a-zA-Z]{1}$/.test(guess)){
          this.game.checkForLetter(event.key)
          this.setState({blankWord: this.game.blankVisibles})


          let wrongArr = [...this.game.wrongLetters.values()]

          this.setState({wrongLetters: wrongArr})

          this.setState({lives: this.game.lives})
          this.setState({gameOver: this.game.gameOver})
          this.setState({wins: this.game.wins})
          this.setState({losses: this.game.losses})
    }
    // else{
    //   console.log(`${guess} is not a letter`);
    // }

  }

componentWillMount() {
    this.game.initializeGame()
    console.log(this.game);
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
              <Word word={this.state.blankWord}/>
              <WrongLetters wrongLetters={this.state.wrongLetters}/>
              <HangmanImage lives={this.state.lives}/>
              <Score wins={this.state.wins} losses={this.state.losses}/>

              {/* GUESSES LEFT: {this.state.lives} */}
              {/* <br></br> */}
              {/* {this.state.gameOver ? 'GAME OVER' : 'Not Over'} */}
              {/* <br></br> */}
              {/* Wins: {this.state.wins} */}
               {/* <br></br> */}
              {/* Losses: {this.state.losses} */}

            </div>
        );
    }
}

render(<App/>, window.document.getElementById('root'));
