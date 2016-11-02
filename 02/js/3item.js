'use strict';
/*var a = prompt('Введите первую переменю для сравнения:');
console.log('a=',a);
var b = prompt('Введите вторую переменю для сравнения:');
console.log('b=',b);
var c = prompt('Введите третью переменю для сравнения:');
console.log('c=',c);*/

var a= 169;
var b= 85;
var c= 69;

console.log('input a=',a);
console.log('input b=',b);
console.log('input c=',c);
console.log('Для трех перменных - самую большую умножить на 100, следующую по влеичине умножить на 10, оставшуюся не трогать.');
if(a>c&&a>b){
    a = a * 100;
    if(b>c) { b = b * 10;}
    if(b<c) { c = c * 10;}
    if(b===c) {
        b = b * 10;
        c = c * 10;
    }
}
if(b>c&&b>a){
    b = b * 100;
    if(a===c) {
        a = a * 10;
        c = c * 10;
    }
    if(a>c) { a = a * 10;}
    if(c>a) { c = c * 10;}
}
if(c>a&&c>b){
    c = c * 100;
    if(a>b)  { a = a * 10;}
    if (b>a) { b = b * 10;}
    if(b===a){
        b = b * 10;
        a = a * 10;
    }
}
if(c===a&&c===b&&c===b){
    a = a * 100;
    b = b * 100;
    c = c * 100;
}
if(a===b&&(c<a&&c<b)){
    a = a * 100;
    b = b * 100;
    c = c * 10;
}
if(a===c&&(b<a&&b<c)){
    a = a * 100;
    c = c * 100;
    b = b * 10;
}
if(c===b&&(a<c&&a<b)){
    c = c * 100;
    b = b * 100;
    a = a * 10;
}
console.log('output a=',a);
console.log('output b=',b);
console.log('output c=',c);

console.log('TO NEXT -  TO NEXT - TO NEXT - TO NEXT - TO NEXT -');
