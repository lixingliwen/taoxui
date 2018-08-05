var str="hello";
var buf=Buffer.from(str);

console.log(buf.length);
var buf2 =Buffer.alloc(10);
buf2[0]=88;
buf2[1]=99;
// buf2[2]=lixing;
// buf2[3]=hello;
console.log(buf2);
console.log(buf2[0].toString(16));