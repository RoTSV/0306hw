
let number=document.querySelector('.input');
let plus=document.querySelector('.plus');
let count=document.querySelector('.count');
let array=document.querySelector('.result');
let a=1;
let b=0;
let arr=[];


plus.addEventListener('click', function () {
    arr.push(number.value);
})
function mult () {
    for( i=0; i<arr.length; i++){
     a = a*number.value;
    }   
    return a;
}
function del (){
    b = a/arr.length;
    return b;
}
count.addEventListener('click', function(){
    console.log(mult(a));
    console.log(del(b));
})
array.addEventListener('click', function(){
    for (let i = 0; i<arr.length; i++){          
        console.log(arr[i]);
    } 
})