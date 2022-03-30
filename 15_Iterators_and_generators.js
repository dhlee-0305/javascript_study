
// 반복자
function makeRangeIterator(start = 0, end = Infinity, step = 1){
    var nextIndex = start;
    var n = 0;

    var rangeIterator = {
        next: function(){
            var result;
            if(nextIndex < end){
                result = {value: nextIndex, done: false};
            }else if(nextIndex == end){
                result = {value: n, done: true};
            }else{
                result = {done: true};
            }

            nextIndex += step;
            n++;
            return result;
        }
    };

    return rangeIterator;
}

var it = makeRangeIterator(1, 4);

var result = it.next();
while(!result.done){
    console.log(result);
    result = it.next();
}

// Generator functions
function* makeRangeIteratorByGenerator(start = 0, end = Infinity, step = 1){
    let n = 0;
    for(let i = start; i < end; i+= step){
        n++;
        yield i;
    }
    return n;
}

var itgf = makeRangeIteratorByGenerator(1, 4);

var resultGf = itgf.next();
while(!resultGf.done){
    console.log(resultGf);
    resultGf = itgf.next();
}

// Iterables : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Iterators_and_generators#iterables

// 사용자 정의 iterable
var myIterable = {
    *[Symbol.iterator](){
        yield 10;
        yield 20;
        yield 30;
    }
}

for(let value of myIterable){
    console.log(value);
}

// 내장 iterable
for(let value of ['a', 'b', 'c']){
    console.log(value);
}

function* gen(){
    yield* ['가', '나', '다'];
}
console.log(gen().next());

[a, b, c] = new Set(['홍', '길', '동']);
console.log(a);
console.log(b);

// Generator 심화
function* fibonacci(){
    var fn1 = 0;
    var fn2 = 1;

    while(true){
        var current = fn1;
        fn1 = fn2;
        fn2 = current + fn1;
        var reset = yield current;
        if(reset){
            fn1 = 0;
            fn2 = 1;

        }
    }
}

var sequence = fibonacci();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next(true).value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);