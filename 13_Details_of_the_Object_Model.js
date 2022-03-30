//객체 모델의 세부 사항: https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Details_of_the_Object_Model

var a = {a: 1};

var b = Object.create(a);
console.log(b.a);

var c = Object.create(b);
console.log(c.a);


function Employee(){
    this.name = "";
    this.dept = "general";
}
Employee.specialty = "none";

function Manager(){
    Employee.call(this);
    this.report = [];
}
Manager.prototype = Object.create(Employee.prototype);

function WorkBee(){
    Employee.call(this);
    this.project = [];
}
WorkBee.prototype = Object.create(Employee.prototype);

function SalesPerson(){
    WorkBee.call(this);
    this.dept = "sales";
    this.quota = 100;
}
SalesPerson.prototype = Object.create(WorkBee.prototype);

function Engineer(){
    WorkBee.call(this);
    this.dept = "enginnering";
    this.machine = "";
}
Engineer.prototype = Object.create(WorkBee.prototype);
//Engineer.prototype.specialty = "code";

var jim = new Employee;
console.log(jim);

var sally = new Manager;
console.log(sally);

var mark = new WorkBee;
console.log(mark);

var fred = new SalesPerson;
console.log(fred);

var jane = new Engineer;
console.log(jane);

//객체 속성들: https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Details_of_the_Object_Model#%EA%B0%9D%EC%B2%B4_%EC%86%8D%EC%84%B1%EB%93%A4

// 좀 더 유연한 생성자: https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Details_of_the_Object_Model#%EC%A2%80_%EB%8D%94_%EC%9C%A0%EC%97%B0%ED%95%9C_%EC%83%9D%EC%84%B1%EC%9E%90%EB%93%A4
