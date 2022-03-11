
(function(){
    "use strict";

    function greetMe(yourName){
        //alert('Hello ' + yourName);
        console.log('Hello ' + yourName);
    }

    greetMe('World');

    if(true){
        var x = 5;
    }
    console.log(x);

    foo();

    function foo(){
        console.log('bar');
    }

    var MY_OBJECT = {'key': 'value3'};
    console.log(MY_OBJECT.key);

    const my_array=['html', 'css'];
    my_array.push('javascript');
    console.log(my_array);

    console.log("37"-7);
    console.log("37"+7);
    console.log(parseInt("37")+7);
    console.log(+"37"+7);

    var fish = ['lion', '', 'angle'];
    console.log(fish[0]);
    console.log(fish.length);

})();
