//https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects

/*
const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
*/

const myCar ={
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};
console.log(myCar);
console.log(myCar.color);
console.log(myCar['model']);

const myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type  = '마침표 구문';
myObj['date created'] = '공백을 포함한 문자열';
myObj[str] = '문자열 값';
myObj[rand]= '무작위 수';
myObj[obj] = '객체';
myObj[''] = '빈 문자열까지';

console.log(myObj);

function showProps(obj, objName){
    let result = '';
    for(let i in obj){
        if(obj.hasOwnProperty(i)) {
            result += `${objName}.${i} = ${obj[i]}\n`;
        }
    }
    console.log(result);
}
console.log(showProps(myCar, 'myCar'));

// 객체 속성 나열하기: https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects#%EA%B0%9D%EC%B2%B4_%EC%86%8D%EC%84%B1_%EB%82%98%EC%97%B4%ED%95%98%EA%B8%B0

console.log('listAllProperties() ------------------------------------------------')
function listAllProperties(argObject){
    let objectToInspect = argObject;
    let result = [];

    while(objectToInspect != null){
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));
        objectToInspect = Object.getPrototypeOf(objectToInspect);
    }

    return result;
}
console.log(listAllProperties(myCar));

// 생성자 함수 사용하기

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

var yourCar = new Car('Eagle', 'Talon TSi', 1993);
console.log(yourCar);

function Human(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}

const lee = new Human('daehyun', 46, 'M');

function Car2(make, model, year, owner){
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

const car2 = new Car2('Grandure', 'Hyundai', 2019, lee);

console.log(car2);


const Animal = {
    type: '무척추동물',
    displayType: function(){
        console.log(this.type);
    }
};

const animal1 = Object.create(Animal);
animal1.displayType();

const fish = Object.create(Animal);
fish.type = '물고기';
fish.displayType();

// 상속: https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects#%EC%83%81%EC%86%8D

Car2.prototype.color = null;
car2.color = 'black';
console.log(car2);

// 메서드 정의

// this로 객체 참조하기
const Manager = {
    name: "John",
    age: 27,
    job: "소프트웨어 엔지니어"
  }
  const Intern = {
    name: "Ben",
    age: 21,
    job: "소프트웨어 엔지니어 인턴"
  }
  
  function sayHi() {
    console.log(`안녕하세요, 제 이름은 ${this.name}입니다.`)
  }
  
  // 두 객체 모두에 sayHi 함수 추가
  Manager.sayHi = sayHi;
  Intern.sayHi = sayHi;
  
  Manager.sayHi(); // 안녕하세요, 제 이름은 John 입니다.'
  Intern.sayHi(); // 안녕하세요, 제 이름은 Ben 입니다.'

// 접근자로 설정자 정의하기

const obj2 = {
    tmp: 7,
    get getTmp(){
        return this.tmp +1;
    },
    set setTmp(arg){
        this.tmp = arg / 2;
    }
};
console.log(obj2.tmp);
console.log(obj2.getTmp);
obj2.setTmp = 20;
console.log(obj2.getTmp);

const obj3 = {a:0};
Object.defineProperties(obj3, {
    'b' : {get: function(){return this.a+1;}},
    'c' : {set: function(x){ this.a = x/2;}}
});
obj3.c = 40;
console.log(obj3.b);

