// let words = ['red', 'yellow', 'blue', 'orange']
let words = ['yellow']

class Hangman {
  constructor(words, lives=6, blankChar='*') {
    this.words = words;
    this.lives = lives
    this.blankChar = blankChar
    this.wrongLetters = new Set();
  }


  initializeGame = () => {
    // this.setWrongLetters();
    this.setCurrentWord();
    this.createWordMap();
    this.setNumberOfLettersToWin();
    this.setBlankLetters();
  }



  // setWrongLetters = () =>{
  //   let wrongLetters = new Set();
  //   this.wrongLetters = wrongLetters
  // }

  setCurrentWord = () => {
    let currentWord = this.words[Math.floor(Math.random()*this.words.length)]
    this.currentWord = currentWord;
  }

  // displayCurrentWord = () => {
  //   console.log(this.currentWord);
  // }

  createWordMap = () =>{
    let wordMap = new Map();

    for (let i = 0; i < this.currentWord.length; i++) {

      if (wordMap.has(this.currentWord[i])){

        let currentIndex = wordMap.get(this.currentWord[i])

        currentIndex.push(i);

        wordMap.set(this.currentWord[i], currentIndex)

      }
      else{
        wordMap.set(this.currentWord[i], [i])
      }
    }



    this.wordMap = wordMap

    // console.log(this.wordMap);
  }

  /**
  write desc before params
  @param {string} ltr -foobare
  */

  checkForLetter = (ltr) =>{
    if (this.wordMap.has(ltr)) {
      console.log('YES');
      this.updateBlanks(this.wordMap.get(ltr));
      this.neededToWin--;
    } else {
      console.log('NO');

      this.wrongLetters.add(ltr)
    }

    this.checkForGameOver()
  }

  setBlankLetters = () => {
    let blanks = new Array(this.currentWord.length).fill(this.blankChar);
    this.blanks = blanks;
    this.displayBlanks();
  }

  displayBlanks = () => {
    this.blankVisibles = this.blanks.join("")
    // console.log(this.displayBlanks);
  }

  updateBlanks = (arr) => {
    for (var i = 0; i < arr.length; i++) {
      this.blanks[arr[i]] = this.currentWord[arr[i]]
    }

    this.displayBlanks();
  }

  setNumberOfLettersToWin = () => {
    this.neededToWin = this.wordMap.size
  }

checkForGameOver = () => {
  if(this.lives === this.wrongLetters.size){
    console.log('you lose!');
  }
  if(this.neededToWin === 0){
    console.log('You win!');
  }
}



}


export default Hangman
// let game = new Hangman(words);

// game.initializeGame();
//
// game.checkForLetter('k');
