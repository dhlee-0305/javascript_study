
// 특수 문자 사용하기 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions#%ED%8A%B9%EC%88%98_%EB%AC%B8%EC%9E%90_%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
const text = 'A quick fox';

const regexpLastWord = /\w+$/;
console.log(text.match(regexpLastWord));

const regexpWords = /\b\w+\b/g;
console.log(text.match(regexpWords));

const regexpFoxQuality = /\w+(?= fox)/;
console.log(text.match(regexpFoxQuality));

//------------------
const chessStory = 'He played the King in a8 and she moved her Queen in c2.';
const regexpCoordinates = /\w\d/g;
console.log(chessStory.match(regexpCoordinates));

const moods = 'happy 🙂, confused 😕, sad 😢';
const regexpEmoticons = /[\u{1F600}-\u{1F64F}]/gu;
console.log(moods.match(regexpEmoticons));

//------------------
const ghostSpeak = 'booh boooooooh';
const regexpSpooky = /bo{3,}h/;
console.log(ghostSpeak.match(regexpSpooky));

const modifiedQuote = '[He] ha[s] to go rad the novel [Alice in Wonderland].';
const regexpModifications = /\[.*?\]/g;
console.log(modifiedQuote.match(regexpModifications));

const regexpTooGreedy = /\[.*\]/g;
console.log(modifiedQuote.match(regexpTooGreedy));

// 이스케이핑 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions#%EC%9D%B4%EC%8A%A4%EC%BC%80%EC%9D%B4%ED%95%91
function escapeRegExp(string){
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
console.log(escapeRegExp("abcABC123/\[{}]:;()"));

const myRe = /d(b+)d/g;
console.log(myRe.exec('cdbbdbsbz'));
console.log('cdbbdbsbz'.match(myRe));

const myRe2 = /d(b+)d/g;
const myArray2 = myRe2.exec('cdbbdbsbz');
console.log(`lastIndex의 값은 ${myRe2.lastIndex}`);

const re = /\w+\s/g;
const str = 'fee fi fo fum';
console.log(str.match(re));

const str2 = 'fee fi fo fum';
const re2 = /\w+\s/g;
console.log('------------------------');
console.log(re2.exec(str2));
console.log(re2.exec(str2));
console.log(re2.exec(str2));
console.log(re2.exec(str2));
console.log('------------------------');
console.log(str2.match(re2));





