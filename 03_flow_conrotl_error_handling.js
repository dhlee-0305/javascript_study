
var x = 1;

{
    var x = 2;
}

console.log(x);

var b = new Boolean(false);
if(b){
    console.log("true");
}

//throw example
function UserException(message){
    this.message = message;
    this.name = "UserException";
}

UserException.prototype.toString = function(){
    return this.name + ' : "' + this.message + '"';
}

try{
    throw new UserException("Value to high");
}catch(e){
    console.log(e.name);
    console.log(e.message);
}

console.log('trh...catch ----------------');
function getMonthName(mo){
    mo = mo -1;
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if(months[mo] != null){
        return months[mo];
    }else{
        throw "InvalidMonthNo";
    }
}

var myMonth = 5;
try{
    monthName = getMonthName(myMonth);

}catch(e){
    monthName = "unknown";
}
console.log(monthName);

try {
    throw (new UserException("myException"));
  }
  catch (e) {
    console.log(e.name);
    console.log(e.message);
  }

  function f() {
    try {
      throw "bogus";
    } catch(e) {
      console.log('caught inner "bogus"');
      throw e; 
    } finally {
      return false;
    }
  }
  
  try {
    f();
  } catch(e) {
    console.log('caught outer "bogus"');
  }
