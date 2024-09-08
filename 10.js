var i = parseFloat(prompt('informe sua altura'));
var j = parseInt(prompt('informe seu genero 1=feminino; 2=masculino'));

if (j == 1){//feminino
    alert('Seu peso ideal é: ' + ((62.1 * i) - 44.7))
}else{//masculino
    alert('Seu peso ideal é: ' + ((72.7 * i) - 58))
}