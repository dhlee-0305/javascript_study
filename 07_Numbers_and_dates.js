
// Number 객체
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

//
var numObj = 0.0123456
console.log(numObj.toPrecision(8));
console.log(numObj.toPrecision(7));
console.log(numObj.toPrecision(6));
console.log(numObj.toPrecision(5));
console.log(numObj.toPrecision(4));
console.log(numObj.toPrecision(3));
console.log(numObj.toPrecision(2));
console.log(numObj.toPrecision(1));

console.log(numObj.toFixed(8));
console.log(numObj.toFixed(7));
console.log(numObj.toFixed(6));
console.log(numObj.toFixed(5));
console.log(numObj.toFixed(4));
console.log(numObj.toFixed(3));
console.log(numObj.toFixed(2));
console.log(numObj.toFixed(1));

// Math 객체
console.log(Math.PI);
console.log(Math.sin(1.56));
console.log(Math.random());
console.log(Math.floor(Math.random()*100));

//Date 객체
var nowDate = new Date();
console.log(Date());
var birth = new Date(1977, 3, 5, 16, 30, 000);
console.log(birth.toLocaleString());

/*
console.log(birth.getFullYear());
console.log(birth.getMonth());
console.log(birth.getDate());
console.log(birth.getHours());
console.log(birth.getMinutes());
console.log(birth.getSeconds());
console.log(birth.getMilliseconds());
*/

var dateString = birth.getFullYear()+" " 
                + birth.getMonth()+"/" 
                + birth.getDate()+" "
                + birth.getHours()+":"
                + birth.getMinutes()+":"
                + birth.getMilliseconds();
console.log(dateString);
console.log( (nowDate.getFullYear() - birth.getFullYear()));

function JSClock() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var temp = "" + ((hour > 12) ? hour - 12 : hour);
    if (hour == 0)
        temp = "12";
    temp += ((minute < 10) ? ":0" : ":") + minute;
    temp += ((second < 10) ? ":0" : ":") + second;
    temp += (hour >= 12) ? " P.M." : " A.M.";
    return temp;
}
console.log(JSClock());