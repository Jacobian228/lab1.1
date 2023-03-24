function submit(){
        var x=0
        var array = []
        var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
        for (var i = 0; i < checkboxes.length; i++) {
            array.push(parseInt(checkboxes[i].value))
        }
        array.forEach(item => x+=item)
        document.getElementById('result').innerHTML = 'Результат: ('+x+'/6)'
    }

function onlyOne(checkbox) {
        var checkboxes = document.getElementsByName(checkbox.name)
        checkboxes.forEach((item) => {if (item !== checkbox) item.checked = false})
}
