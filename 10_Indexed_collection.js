
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Indexed_collections


let myList = [, 'home', 'school'];
console.log(myList.length);

let wisenArray = Array.of(9.3);
console.log(wisenArray);

//배열에 값 저장 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Indexed_collections#%EB%B0%B0%EC%97%B4%EC%97%90_%EA%B0%92_%EC%A0%80%EC%9E%A5
var emp = [];
emp[0] = 'Casey Jones';
emp[1] = 'Phil Lesh';
emp[2] = 'August West';

console.log(emp);

var arr = [];
arr[3.4] = 'Oranges';
console.log(arr.length);                // 0
console.log(arr.hasOwnProperty(3.4));   // true
console.log(arr);

var myArray = ['Wind', 'Rain', 'Fire'];
console.log(myArray[1]);
console.log(myArray['length']);

var cats = [];
cats[30] = ['Dusty'];
console.log(cats.length); // 31

var animal = ['Dusty', 'Misty', 'Twiggy'];
console.log(animal.length);
animal.length = 2;
console.log(animal.length);
console.log(animal);

console.log('for ---------------------');
var colors = ['red', 'green', 'blue'];
for(var i=0; i<colors.length; i++){
    console.log(i+":"+colors[i]);
}

console.log('forEach ---------------------');
colors.forEach(function(color){
    console.log(color);
});

console.log('forEach => ---------------------');
colors.forEach(color => console.log(color));

var array = ['first', 'second', , 'fourth'];
array.forEach(function(element){
    console.log(element);
})

if(array[2] === undefined){
    console.log('array[2] is undefined');
}

//배열 객체의 메서드 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Indexed_collections#%EB%B0%B0%EC%97%B4_%EA%B0%9D%EC%B2%B4%EC%9D%98_%EB%A9%94%EC%84%9C%EB%93%9C


