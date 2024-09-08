var i = parseInt(prompt('informe um valor'));
var j = parseInt(prompt('informe um valor'));
var type = parseInt(prompt('TIPO DE OPERAÇÃO: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação'));

if (type == 1){
    alert('SOMA: ' + (i+j));
}else if (type == 2){
    alert('SUBTRAÇÃO: ' + (i-j));
}else if (type == 3){
    alert('DIVISÃO: ' + (i/j));
}else if (type == 4){
    alert('PRODUTO: ' + (i*j));
}else{
    alert('Operação selecionada INVALIDA!')
}