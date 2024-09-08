var i = prompt('informe um número');
var j = prompt('informe um número');
var k = prompt('informe um número');

if(i > j && i > k){
    alert(i + 'é maior do que ' + j + ' e ' + k);
}else if (j > i && j > k){
    alert(j + 'é maior do que ' + i + ' e ' + k);
}else {
    alert(k + 'é maior do que ' + j + ' e ' + i);
}