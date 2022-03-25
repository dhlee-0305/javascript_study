
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Keyed_collections

// Maps
var saying = new Map();
saying.set('dog', 'woof');
saying.set('cat', 'mew');
saying.set('elephant', 'toot');
console.log(saying);
console.log(saying.size);
console.log(saying.get('fox'));
console.log(saying.has('bird'));
console.log(saying.delete('dog'));
for(var [key, value] of saying){
    console.log(key + " goes " + value);
}

// WeakMap object
const privates = new WeakMap();

function Public(){
    const me = {
        // private data goes here
        
    };
    privates.set(this, me);
}

Public.prototype.method = function(){
    const me = privates.get(this);
}

module.exports = Public;

// Sets
var mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');

for(let item of mySet){
    console.log(item);
}
console.log(mySet);
console.log(Array.from(mySet));