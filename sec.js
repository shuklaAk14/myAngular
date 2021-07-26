//IIFE=Immediately Instatiable Function Expression
// (
//     function () {
//         for (let i = 0; i < 5; i++) {
//             console.log(i + 1);
//         }
//     }
// )()

// const Bikes = class {
//     constructor(name, brand) {
//         this.name = name;
//         this.brand = brand;
//     }
//     milTask() {
//         console.log('Mileage is not heavy ');
//     }
// }

// let bike = new Bikes('Splendor', 'Kawasaki');
// console.log(bike);

// class Cycles extends Bikes {
//     constructor(name, brand, isElec) {
//         super(name, brand);
//         this.isElec = isElec;
//     }
// }

// let obCycle = new Cycles('Hero', 'Avenger', false);
// obCycle.milTask();

//Function constructor
let funa = new Function("a", "b", "return a+b")
// console.log(funa(1, 2));

let funb = new Function("p", "q", "return Math.pow(p,q)");
// console.log(funb(2, 3));

function myArea(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
}
//Currying
// let pp = myArea(2);
// let qq = pp(3);
// console.log(qq(4));

// function myArea2(a, b, c) {
//     return a * b * c;
// }
// console.log(myArea2(2, 3));

// const calVol = (a) => {
//     return (b) => {
//         return (c) => {
//             return `The length ${a} \nThe breadth is ${b} \nThe height is ${c}`;
//         }
//     }
// }

// console.log(calVol(2)(3)(4));
// let r1 = calVol(2);
// let r2 = r1(3)(4);
// console.log(r2);

// const test = function (a) {
//     return function (b) {
//         return a + b;
//     }
// }
// console.log(test(21)(22));

///If it is array take it as array or else make it a array
//bunch of elements which need to be converted and then used as array

// function tFun6(b, c, ...a) {
//     var a1 = [...a];
//     a1.forEach(n => console.log(n.name));
//     // console.log(a1);
//     console.log(b);
//     console.log(c);
// }

// tFun6(23, 24, { name: 'Radha' }, { name: 'Radhika' }, { name: 'Raseswari' }, { name: 'Brindavani' });
//Spread param should not be the first param in formal param list

// const tFun7 = (...a) => {
//     var p = [...a];
//     var j = p.join('');
//     return j;
// }

// console.log(tFun7('Jayesh', 'Jaimini', 'Parul', 'Piyush', 'Priti'));

// const tFun8 = (a, b, c, d) => {
//     let tt = [a, b, c, d];
//     console.log(tt.join());
// }

// tFun8(['a', 'b', 'c', 'd']);

const rev = (a) => { return a.split('').reverse().join('') }
console.log(rev('Satish'));








