// import './word.scss';
import React from 'react';
import "./Score.scss"

const Score = (props) =>
<div className='score-style'>
  WINS: {props.wins}
  LOSSES: {props.losses}
</div>



export default Score
