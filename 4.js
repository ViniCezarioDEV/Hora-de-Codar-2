var i = parseInt(prompt('informe um número'));
var j = parseInt(prompt('informe um número'));
var k = parseInt(prompt('informe um número'));

if(i & j > k){
    alert(i + j);
}else if(j & k > i){
    alert(j + k);
}else if(k & i > j){
    alert(k + i);
}else{
    alert('tem nada aqui n man')
}