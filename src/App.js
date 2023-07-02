import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question1 from './Question1.js';
import Question2 from './Question2.js';
import Question3 from './Question3.js';
import Title from './aboba.js';
import Answer from './answ.js'

class App extends Component {
    
    render(){
        let Rand1=Question1;
        let Rand2=Question2;
        let Rand3=Question3;
  return (
    <div className="App">
    <Title />
    <div class="grid-container">
      <Rand1 />
      <Rand2 />
      <Rand3 />
    </div>
      <Answer />
    </div>
  );}
}

export default App;