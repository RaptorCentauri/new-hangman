import React from 'react';
import { render } from 'react-dom';
import Hangman from './gameLogic/game.js'

// import './index.scss'

class App extends React.Component {
    game = new Hangman(['red', 'yellow', 'blue', 'orange'])

    state = {
      blankWord: '',
      wrongLetters: []

    }




  handleKeyPress = (event) => {

    console.log(event);

    let guess = event.key;

    console.log('guess', guess);

    if (/^[a-zA-Z]{1}$/.test(guess)){


      console.log(`${guess} is a letter`);

          this.game.checkForLetter(event.key)
          this.setState({blankWord: this.game.blankVisibles})


          let wrongArr = [...this.game.wrongLetters.values()]


          this.setState({wrongLetters: wrongArr})
    }
    else{
      console.log(`${guess} is not a letter`);
    }

  }

  componentWillMount() {
    console.log('Expecting a mount');
    this.game.initializeGame()
    console.log(this.game);
    this.setState({blankWord: this.game.blankVisibles})
    console.log(this.game.blankVisibles);
    // console.log(this.state);
      // window.addEventListener('keyup', this.handleKeyPress);
    }


componentDidMount() {
    window.addEventListener('keyup', this.handleKeyPress);
}

  render() {
      // this.state.game.initializeGame()

        return (
            <div className='App'>
              {this.state.blankWord}
              <br></br>
              WRONG: {this.state.wrongLetters}
            </div>
        );
    }
}

render(<App/>, window.document.getElementById('root'));
