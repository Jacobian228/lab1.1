
function Title() {
  return (
      <div>
        <p>Если вы уверенны в своих ответах, нажмите на кнопку "Ответить".</p>
        <button type="button" onClick={window['submit']}>Ответить</button>
        <p id="result">Результат:</p>      </div>
  );
}

export default Title;