
var s = new String("foo");
console.log(s);
console.log(typeof s);

var s1 = "2 + 2";
console.log(s1);
var s2 = new String("2+2");
console.log(s2);
var s3 = "2" + "2";
console.log(s3);
var s4 = '2' + '2';
console.log(s4);

var mystring = 'Hello, World!';
var x = mystring.length;
console.log(x);
mystring[0]='L';
console.log(mystring);
var mystring2 = "핼로우 월드";
console.log(mystring2.length);

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p);
console.log(p.replace('dog', 'monkey'));

const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));

console.log("string text line 1\n\
string text line 2");

var a = 5;
var b = 10;
console.log("Fifteen is " + (a + b) + " and not " + (2 * a + b) + ".");

var aa = 5;
var bb = 10;
console.log(`Fifteen is ${aa + bb} and not ${2 * aa + bb}.`);

//날짜와 시간서식 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Text_formatting#%EB%82%A0%EC%A7%9C%EC%99%80_%EC%8B%9C%EA%B0%84%EC%84%9C%EC%8B%9D

var msPerDay =  24 * 60 * 60 * 1000;
var july172014 = new Date(msPerDay * (44 * 365 + 11 + 197));
var options = {year:"2-digit", month:"2-digit", day:"2-digit", 
                hour:"2-digit", minute:"2-digit", timeZoneName:"short"};
var americaDateTime = new Intl.DateTimeFormat("en-US", options).format;

console.log(americaDateTime(july172014));


var gasPrice = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
console.log(gasPrice.format(5.259));

var hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec", {style:"currency", currency: "CNY"});
console.log(hanDecimalRMBInChina.format(1314.25));

var names = ["Hochberg", "Hönigswald", "Holzman"];
var germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");
console.log(names.sort(germanPhonebook.compare).join(", "));

var germanDictionary = new Intl.Collator("de-DE-U-co-dict");
console.log(names.sort(germanDictionary.compare).join(", "));



