const mymod = require('./seven');
const mymodd = new mymod();
mymodd.fun1();
mymodd.fun2();
let obj = new mymodd.MyCar('Skoda', 'Skoda Octavia', 'Auromobile');
console.log(obj);
let aobj = new mymodd.MyAuto('Ashok Leyland', 'Lorry');
console.log(aobj);

console.log(mymodd.MyAuto.tt);
