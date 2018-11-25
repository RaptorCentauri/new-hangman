// import './word.scss';
import React from 'react';
import "./Score.scss"

const Score = (props) =>
<div className='score-style'>
  <div>WINS: {props.wins}</div>
  <div>LOSSES: {props.losses}</div>
</div>



export default Score
