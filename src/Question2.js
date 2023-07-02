function Question2() {
    if (Math.random() < 0.5) {
            return (
    <div class="grid-item">
        <img alt="A screenshot showing CSS Quick Edit" src="screenshots/333.png" />
        <a>
            <label>1)</label>
            <input type="radio" id="a1" name="f3" value='0'/>
            <label>2)</label>
            <input type="radio" id="a2" name="f3" value='0'/>
            <label>3)</label>
            <input type="radio" id="a3" name="f3" value='1'/>
        </a>
    </div>
  );
        }
        else  return (
    <div class="grid-item">
        <img alt="A screenshot showing CSS Quick Edit" src="screenshots/444.png" />
        <a>
            <label>1)</label>
            <input type="radio" id="a1" name="f4" value='0'/>
            <label>2)</label>
            <input type="radio" id="a2" name="f4" value='0'/>
            <label>3)</label>
            <input type="radio" id="a3" name="f4" value='1'/>
        </a>
    </div>
  );
}


function Question3() {
  return (
    <div class="grid-item">
        <img alt="A screenshot showing CSS Quick Edit" src="screenshots/333.png" />
        <a>
            <label>1)</label>
            <input type="radio" id="a1" name="f3" value='0'/>
            <label>2)</label>
            <input type="radio" id="a2" name="f3" value='0'/>
            <label>3)</label>
            <input type="radio" id="a3" name="f3" value='1'/>
        </a>
    </div>
  );
}

function Question4() {
  return (
    <div class="grid-item">
        <img alt="A screenshot showing CSS Quick Edit" src="screenshots/444.png" />
        <a>
            <label>1)</label>
            <input type="radio" id="a1" name="f4" value='0'/>
            <label>2)</label>
            <input type="radio" id="a2" name="f4" value='0'/>
            <label>3)</label>
            <input type="radio" id="a3" name="f4" value='1'/>
        </a>
    </div>
  );
}

function Question5() {
  return (
    <div class="grid-item">
        <img alt="A screenshot showing CSS Quick Edit" src="screenshots/555.png" />
        <a>
            <label>1)</label>
            <input type="radio" id="a1" name="f5" value='1'/>
            <label>2)</label>
            <input type="radio" id="a2" name="f5" value='0'/>
            <label>3)</label>
            <input type="radio" id="a3" name="f5" value='0'/>
        </a>
    </div>
  );
}

function Question6() {
  return (
    <div class="grid-item">
        <img alt="A screenshot showing CSS Quick Edit" src="screenshots/666.png" />
        <a>
            <label>1)</label>
            <input type="radio" id="a1" name="f6" value='0'/>
            <label>2)</label>
            <input type="radio" id="a2" name="f6" value='1'/>
            <label>3)</label>
            <input type="radio" id="a3" name="f6" value='0'/>
        </a>
    </div>
  );
}

export default Question2;