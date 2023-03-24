import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
<h1>Тест ПДД</h1>

<p>Внимательно прочитайте вопросы с картинок и выберите единственный правильный вариант ответа.</p>

<p>Вопросы к которым не дан ответ, будут считаться нерешенными.</p>

<div class="grid-container">
    <div class="grid-item">
        <img alt="A screenshot showing CSS Quick Edit" src="screenshots/quick-edit.png" />
        <a>
            <label>А</label>
            <input type="checkbox" id="a1" name="f1" onClick={window['onlyOne(this)']} value='1'/>
            <label>Б</label>
            <input type="checkbox" id="a2" name="f1" onClick={window['onlyOne(this)']} value='0'/>
            <label>В</label>
            <input type="checkbox" id="a3" name="f1" onClick={window['onlyOne(this)']} value='0'/>
        </a>
    </div>
   <div class="grid-item">
        <img alt="A screenshot showing CSS Quick Edit" src="screenshots/quick-edit.png" />
        <a>
            <label>А</label>
            <input type="checkbox" id="a1" name="f2" onClick={window['onlyOne(this)']} value='0'/>
            <label>Б</label>
            <input type="checkbox" id="a2" name="f2" onClick={window['onlyOne(this)']} value='1'/>
            <label>В</label>
            <input type="checkbox" id="a3" name="f2" onClick={window['onlyOne(this)']} value='0'/>
        </a>
    </div>
    <div class="grid-item">
        <img alt="A screenshot showing CSS Quick Edit" src="screenshots/quick-edit.png" />
        <a>
            <label>А</label>
            <input type="checkbox" id="a1" name="f3" onClick={window['onlyOne(this)']} value='0'/>
            <label>Б</label>
            <input type="checkbox" id="a2" name="f3" onClick={window['onlyOne(this)']} value='0'/>
            <label>В</label>
            <input type="checkbox" id="a3" name="f3" onClick={window['onlyOne(this)']} value='1'/>
        </a>
    </div>
    <div class="grid-item">
        <img alt="A screenshot showing CSS Quick Edit" src="screenshots/quick-edit.png" />
        <a>
            <label>А</label>
            <input type="checkbox" id="a1" name="f4" onClick={window['onlyOne(this)']} value='1'/>
            <label>Б</label>
            <input type="checkbox" id="a2" name="f4" onClick={window['onlyOne(this)']} value='0'/>
            <label>В</label>
            <input type="checkbox" id="a3" name="f4" onClick={window['onlyOne(this)']} value='0'/>
        </a>
    </div>
    <div class="grid-item">
        <img alt="A screenshot showing CSS Quick Edit" src="screenshots/quick-edit.png" />
        <a>
            <label>А</label>
            <input type="checkbox" id="a1" name="f5" onClick={window['onlyOne(this)']} value='0'/>
            <label>Б</label>
            <input type="checkbox" id="a2" name="f5" onClick={window['onlyOne(this)']} value='1'/>
            <label>В</label>
            <input type="checkbox" id="a3" name="f5" onClick={window['onlyOne(this)']} value='0'/>
        </a>
    </div>
    <div class="grid-item">
        <img alt="A screenshot showing CSS Quick Edit" src="screenshots/quick-edit.png" />
        <a>
            <label>А</label>
            <input type="checkbox" id="a1" name="f6" onClick={window['onlyOne(this)']} value='0'/>
            <label>Б</label>
            <input type="checkbox" id="a2" name="f6" onClick={window['onlyOne(this)']} value='0'/>
            <label>В</label>
            <input type="checkbox" id="a3" name="f6" onClick={window['onlyOne(this)']} value='1'/>
        </a>
    </div>
</div>

<p>Если вы уверенны в своих ответах, нажмите на кнопку "Ответить".</p>
<button type="button" onClick={window['submit']}>Ответить</button>

<p id="result">Результат:</p>
    </div>
  );
}


export default App;
