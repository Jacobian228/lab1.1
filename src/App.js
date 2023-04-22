import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    
    
    render(){
        let question1=<div class="grid-item">
            <img alt="A screenshot showing CSS Quick Edit" src="screenshots/111.png" />
                <a>
                    <label>1)</label>
                    <input type="radio" id="a1" name="f1" value='0'/>
                    <label>2)</label>
                    <input type="radio" id="a2" name="f1" value='0'/>
                    <label>3)</label>
                    <input type="radio" id="a3" name="f1" value='1'/>
                </a>
            </div>;
        let question2=<div class="grid-item">
        <img alt="A screenshot showing CSS Quick Edit" src="screenshots/222.png" />
        <a>
            <label>1)</label>
            <input type="radio" id="a1" name="f2" value='1'/>
            <label>2)</label>
            <input type="radio" id="a2" name="f2" value='0'/>
            <label>3)</label>
            <input type="radio" id="a3" name="f2" value='0'/>
        </a>
    </div>;
        let question3=  <div class="grid-item">
        <img alt="A screenshot showing CSS Quick Edit" src="screenshots/333.png" />
        <a>
            <label>1)</label>
            <input type="radio" id="a1" name="f3" value='0'/>
            <label>2)</label>
            <input type="radio" id="a2" name="f3" value='0'/>
            <label>3)</label>
            <input type="radio" id="a3" name="f3" value='1'/>
        </a>
    </div>;
        let question4=<div class="grid-item">
        <img alt="A screenshot showing CSS Quick Edit" src="screenshots/444.png" />
        <a>
            <label>1)</label>
            <input type="radio" id="a1" name="f4" value='0'/>
            <label>2)</label>
            <input type="radio" id="a2" name="f4" value='0'/>
            <label>3)</label>
            <input type="radio" id="a3" name="f4" value='1'/>
        </a>
    </div>;
        let question5=<div class="grid-item">
        <img alt="A screenshot showing CSS Quick Edit" src="screenshots/555.png" />
        <a>
            <label>1)</label>
            <input type="radio" id="a1" name="f5" value='1'/>
            <label>2)</label>
            <input type="radio" id="a2" name="f5" value='0'/>
            <label>3)</label>
            <input type="radio" id="a3" name="f5" value='0'/>
        </a>
    </div>;
        let question6=<div class="grid-item">
        <img alt="A screenshot showing CSS Quick Edit" src="screenshots/666.png" />
        <a>
            <label>1)</label>
            <input type="radio" id="a1" name="f6" value='0'/>
            <label>2)</label>
            <input type="radio" id="a2" name="f6" value='1'/>
            <label>3)</label>
            <input type="radio" id="a3" name="f6" value='0'/>
        </a>
    </div>;
        
        let rand1;
        let rand2;
        let rand3;
        if (Math.random() < 0.5) {
            rand1=question1;
        }
        else rand1 = question2;
        if (Math.random() < 0.5) {
            rand2=question3;
        }
        else rand2 = question4;
        if (Math.random() < 0.5) {
            rand3=question5;
        }
        else rand3 = question6;
  return (
    <div className="App">
<h1>Тест ПДД</h1>

<p>Внимательно прочитайте вопросы с картинок и выберите единственный правильный вариант ответа.</p>

<p>Вопросы к которым не дан ответ, будут считаться нерешенными.</p>

<div class="grid-container">
      {rand1}
      {rand2}
      {rand3}
</div>

<p>Если вы уверенны в своих ответах, нажмите на кнопку "Ответить".</p>
<button type="button" onClick={window['submit']}>Ответить</button>

<p id="result">Результат:</p>
    </div>
  );}
}


export default App;
