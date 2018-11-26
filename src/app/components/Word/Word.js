import './word.scss';
import React from 'react';

const Word = (props) =>
<div className='playWord'>
<h1>{props.word}</h1>
<h6>{props.playing ? null : `Press Space to Play Again`}</h6>
</div>


export default Word;
