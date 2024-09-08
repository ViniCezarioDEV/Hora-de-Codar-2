var i = parseInt(prompt('informe um número'));
var j = parseInt(prompt('informe um número'));
var k = parseInt(prompt('informe um número'));
var l = parseInt(prompt('informe um número'));

if (i > j || i > k || i > l) {
    if(j > i || j > k || j > l){
        alert(i + j +' são os maiores')
    
    }else if (k > i || k > j || k > l) {
        alert(i + k +' são os maiores')
    
    }else{//l
        alert(i + l +' são os maiores')
    }


} else if (j > i || j > k || j > l) {//j
    if(i > j || i > k || i > l){//i
        alert(j + i +' são os maiores')
    
    }else if (k > i || k > j || k > l) {//k
        alert(j + k +' são os maiores')
    
    }else{//l
        alert(j + l +' são os maiores')
    }



}else if (k > i || k > j || k > l){//k
    if(i > j || i > k || i > l){//i
        alert(k + i +' são os maiores')
    
    }else if (j > i || j > k || j > l) {//j
        alert(k + j +' são os maiores')
    
    }else{//l
        alert(k + l +' são os maiores')
    }


}else{ //l
   
    if(i > j || i > k || i > l){//i
        alert(l + i +' são os maiores')
    
    }else if (j > i || j > k || j > l) {//j
        alert(l + j +' são os maiores')
    
    }else{//l
        alert(l + k +' são os maiores')
    }
}