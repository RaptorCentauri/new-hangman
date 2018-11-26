class Hangman {
  constructor(words, lives=6, blankChar='_') {
    this.totalLives = lives
    this.words = words;
    this.lives = this.totalLives
    this.blankChar = blankChar
    this.wrongLetters = new Set();
    this.gameOver = false;
    this.wins = 0;
    this.losses = 0;
  }


  initializeGame = () => {
    // this.setWrongLetters();
    this.setCurrentWord();
    this.createWordMap();
    this.setNumberOfLettersToWin();
    this.setBlankLetters();
  }

  startNewRound = () => {
    this.setCurrentWord();
    this.createWordMap();
    this.setNumberOfLettersToWin();
    this.setBlankLetters();

    this.lives = this.totalLives;
    this.wrongLetters.clear();




  }


  setCurrentWord = () => {
    let currentWord = this.words[Math.floor(Math.random()*this.words.length)].toUpperCase()
    this.currentWord = currentWord;
  }

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

  }

  checkForLetter = (ltr) =>{
    ltr = ltr.toUpperCase();

    if (this.wordMap.has(ltr)) {
      this.updateBlanks(this.wordMap.get(ltr));
      this.neededToWin--;
    }
    else if(!this.wrongLetters.has(ltr)){
      this.wrongLetters.add(ltr)
      this.lives--;
    }

    // else {
    //   this.wrongLetters.add(ltr)
    //   this.lives--;
    // }

    this.checkForGameOver()
  }

  setBlankLetters = () => {
    let blanks = new Array(this.currentWord.length).fill(this.blankChar);
    this.blanks = blanks;

    for (let [key, value] of this.wordMap) {
        if (!/^[a-zA-Z]{1}$/.test(key)){
          blanks[value] = key;
        }
    }
    this.displayBlanks();
  }

  displayBlanks = () => {
    this.blankVisibles = this.blanks.join("")
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
    if(this.lives === 0){
      this.gameOver = true;
      this.losses++
      // this.gameEnd = 'You Lose!'
      // console.log('you lose!');
    }
    // if(this.neededToWin === 0){
    if(this.blankVisibles === this.currentWord){
      this.wins++

      // this.gameEnd = 'You Win!'

      console.log('You win!');
    }
  }

}


export default Hangman
