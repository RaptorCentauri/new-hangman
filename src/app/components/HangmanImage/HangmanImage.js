import React from 'react';
import "./HangmanImage.scss"

const HangmanImage = (props) =>
<div className='hangman-style'>
  {props.lives <= 5  ? <div id="head"></div> : null}
  {props.lives <= 4  ? <div id="torso"></div> : null}
  {props.lives <= 3  ? <div id="left-arm"></div> : null}
  {props.lives <= 2  ? <div id="right-arm"></div> : null}
  {props.lives <= 1  ? <div id="left-leg"></div> : null}
  {props.lives <= 0  ? <div id="right-leg"></div> : null}
</div>


export default HangmanImage
