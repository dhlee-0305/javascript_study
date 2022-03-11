
var sales = 'hyundai';

function carType(name){
    if(name == "honda"){
        return name;
    }else{

    }

    return "Sorry, We don't sell "+name+".";
}

var car = {myCar:"saturn", getCar: carType("honda"), special: sales};

console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);

var car2 = { manyCars:{a:"Saab", "b":"Jeep"}, 7:"Mazda"};
console.log(car2.manyCars.b);
console.log(car2[7]);

var unusualPropertyNames={
    "": "An empty string",
    "!": "Bang!"
}

console.log(unusualPropertyNames);
console.log(unusualPropertyNames[""]);
console.log(unusualPropertyNames["!"]);

/*
var obj = {
    __proto__: theProtoObj, 
        handler,
        toString(){
            return "d " + super.toString();
        },
        ['prop_' + (() => 42)()]:42
};
*/

var foo = {a: "alpha", 2:"two"};
console.log(foo.a);
console.log(foo[2]);
console.log(foo["a"]);
console.log(foo["2"]);

console.log("Joh's cat".length);

var name = "lee", time = "today";
var str = `Hello ${name}, how are you ${time}?`;
console.log(str);

var str2 = "this string \n\
is broken \n\
across multiple \n\
lines.";
console.log(str2);

