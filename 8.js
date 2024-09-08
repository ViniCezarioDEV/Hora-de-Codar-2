var list = [];
var result = [];
var sum = null;

for (i = 0; i < 4; i++) {
    var num = parseInt(prompt('informe um número'));
    list.push(num);
}

for (var i of list){
    if (i > 0 && i < 10){
        result.push(i);
    }
}

for (var i of result){
    sum += i;
    sum = sum / result.length();
}

if (sum > 5){
    alert('Você passou no teste');
}else{
    alert('tente novamente');
}