
let i = 0;
do{
    i += 1;
    console.log(i);
}while(i<5);

n = 0;
x = 0;
while(n < 3){
    n++;
    x += n;
    console.log("n:"+n+", x:"+x);
}

var x1 = 0;
var z = 0;
labelCancelLoops: while(true){
    console.log("Outer loops: "+x1);
    x1 += 1;
    z = 1;

    while(true){
        console.log("Inner loops x1:"+x1+", z: "+z);
        z += 1;
        if(z == 10 && x1 == 10){
            console.log("break label!!");
            break labelCancelLoops;
        }else if(z == 10){
            break;
        }
    }
}

ii = 0;
nn = 0;
while(ii < 5){
    ii++;
    if(ii == 3){
        continue;
    }
    console.log("ii:"+ii+", nn: "+nn);
    nn += ii;
}

function dump_props(obj, obj_name){
    var result = "";
    for(var i in obj){
        result += obj_name + "[" + i + "] : " + obj[i] + "\n";
    }

    result += "--------------\n";
    return result;
}

//var cars = ["grandur", "accent", "sonata"];
var cars = {"bander":"hyundai", "model":"grandure", "size":1};
console.log(dump_props(cars, "car"));

let arr = [3, 5, 7];
arr.foo = "hello";

console.log("for...in");
for(let i in arr){
    console.log(i);
}

console.log("for...of");
for(let i of arr){
    console.log(i);
}