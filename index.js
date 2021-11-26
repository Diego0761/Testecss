/*
document.getElementById('button').addEventListener('mouseover', mousedentro);
document.getElementById('button').addEventListener('mouseout', mousefora);
*/

var cb = document.getElementById('button2');
cb.addEventListener('click', coloredclick);



function coloredclick() {
    var red = Math.floor(Math.random() * 256)
    var green = Math.floor(Math.random() * 256)
    var blue = Math.floor(Math.random() * 256)
    var cor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    cb.style.backgroundColor = cor;
}

/*
function mousedentro() {
    var buttons = document.getElementById('button')
    buttons.style.backgroundColor = '#515151';
}

function mousefora() {
    var buttons = document.getElementById('button')
    buttons.style.backgroundColor = '#626262';
}   
*/