var list = [];
var sumList = [];
var sum = null;
for (i=0; i < 6; i++){
    var num = parseInt(prompt('informe um número'));
    list.push(num);
}

for (let item of list) { //equivale a for i in list: em python
    if(item < 72){
        sumList.push(item); //adicionando itens no array
    }
}

for (let value of sumList) {
    sum += value;
}
    


document.write('<p>A soma final é: '+ sum + '</p>');
document.write('<p>O usuario digitou: '+ list + '</p>');