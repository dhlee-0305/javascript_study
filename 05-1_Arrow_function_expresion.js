
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

console.log(materials.map(material => material.length));


// 기본구문
/**
 * (param1, param2, param3, ..., paramN) => { Statements}
 * (param1, param2, param3, ..., paramN) => expression
 * // 다음과 동일함: => {return expression;}
 * 
 * // 매개변수가 하나뿐인 경우 괄호는 선택사항:
 * (singleParam) => {statements}
 *   singleParam  => {statements}
 * 
 * // 매개변수가 없는 함수는 괄호가 필요
 *  () => {statements}
 */

var f = ([a, b] = [1, 2], {x: c} = {x: a+b}) => a+b+c;
console.log(f());

var elements=[
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'    
];

// 일반적인 function 
var element_length = elements.map(function(element){
    return element.length;
});
console.log(element_length);

// 화살표 함수
var elements_length_arrow = elements.map((element) =>{
    return element.length;
});
console.log(elements_length_arrow);

// 파라미터가 하나만 있을 때는 주변 괄호를 생략할 수 있다.
var element_length_param_ommit = elements.map(element => {
    return element.length;
});
console.log(element_length_param_ommit);

// 화살표 함수의 유일한 문장이 return 일 때 return과 중괄호를 생략할 수 있다.
var element_length_all_ommit = elements.map(element => element.length);
console.log(element_length_all_ommit);

// 이 경우 length 속성만 필요하므로 destructuring 매개변수를 사용할 수 있다.
// length는 우리가 얻고자 하는 속성에 해당하는 반면,
// lengthFooBArX는 변경 가능한 변수의 이름일 뿐이므로
// 원하는 유효한 변수명으로 변경할 수 있다.
var elements_length_x = elements.map(({length: lengthFooBArX}) => lengthFooBArX);
console.log(elements_length_x);

// destructuring 파라미터 할당도 아래와 같이 작성할 수 있습니다.
// 이 예에서 정의한 객체내의 length에 값을 지정하지 않는 점에 주목하세요. 대신, length 변수의
// 리터럴 이름은 우리가 해당 객체에서 꺼내오고 싶은 속성이름 자체로 사용됩니다.
var element_length_literial = elements.map(({length}) => length);
console.log(elements_length_x);

// 바인딩 되지 않은 this : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions#%EB%B0%94%EC%9D%B8%EB%94%A9_%EB%90%98%EC%A7%80_%EC%95%8A%EC%9D%80_this
function Person(){
    // Person() 생성자는 'this'를 자신의 인스턴스로 정의.
    this.age = 0;

    setInterval(() => {
        this.age++;
    }, 10);
}
var person = new Person();
console.log(person.age);
person.age++;
console.log(person.age);

// 매개변수가 없는 경우에도 더 읽기 쉬움
setTimeout( () => {
    console.log('I happen sooner');
    setTimeout( () => {
      // deeper code
      console.log('I happen later');
    }, 1);
  }, 1);