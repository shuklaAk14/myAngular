// var arr = ['Buckingham Palace', 'White House', 'Paris Tower', 'Empire State Building', 'Pent House'];

// let iter = arr[Symbol.iterator]();

// for (let a = iter.next(); a.done != true; a = iter.next()) {
//     console.log(a.value);
// }

let ss = new Set();
ss.add(21);
ss.add(21);
ss.add(21);
ss.add(21);
ss.add(21);
ss.add(2);
ss.add(1);
ss.add(3);
ss.add(4);
ss.add(5);

// let i = ss;
// let iter = i[Symbol.iterator]();
// for (let a = iter.next(); a.done != true; a = iter.next()) {
//     console.log(a.value);
// }

let arr1 = [2, 3, 4, 5, 6];
let arr2 = ['a', 'e', 'r', 'j', 'k'];

let myMa = new Map();
for (let i = 0; i < arr1.length; i++) {
    myMa.set(arr1[i], arr2[i]);
}

let rr = myMa.keys();
let iter3 = rr[Symbol.iterator]();
for (let i = iter3.next(); i.done != true; i = iter3.next()) {
    const tt = i.value;
    console.log(tt + " " + myMa.get(tt));
}
