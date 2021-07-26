
function* TGen() {
    yield "First Gen";
    yield "Second Gen";
    yield "Third Gen";
    yield "Fourth Gen";
}

let tt1 = TGen();
console.log(tt1.next().value);
for (let i = 0; i < 15000; i++) { }
console.log(tt1.next().value);
for (let i = 0; i < 15000; i++) { }
console.log(tt1.next().value);
for (let i = 0; i < 15000; i++) { }
console.log(tt1.next().value);

// console.log(tt1.next());
// console.log(tt1.next());
// console.log(tt1.next());
// console.log(tt1.next());
// console.log(tt1.next());

// for (let b = tt1.next(); b.done != true; b = tt1.next()) {
//     console.log(b.value);
// }










// const arr = ['Radha', 'Radhika', 'Raseswari', 'Brindavani', 'Krishna'];
// let myLen = arr.length;



// function* MyGen() {
//     let a = 0;
//     while (a < myLen) {
//         yield arr[a];
//         a++;
//     }
// }

// const iter = MyGen();
// // console.log(iter.next().value);
// // console.log(iter.next().value);
// // console.log(iter.next().value);
// // console.log(iter.next().value);

// for (let a = iter.next(); a.done != true; a = iter.next()) {
//     console.log(a.value);
// }



// let arr1 = [10, 20, 30, 40, 50];
// let arr2 = ['Radha', 'Krishna', 'Radhika', 'Leela', 'Indira'];
// let myMap = new Map();

// for (let i = 0; i < arr1.length; i++) {
//     myMap.set(arr1[i], arr2[i]);
// }

// let l1 = arr1.length;

// function* KGen() {
//     let a = 0;
//     while (a < l1) {
//         yield (myMap.keys());
//         a++;
//     }
// }

// let iter2 = KGen();

// for (let a = iter2.next(); a.done != true; a = iter2.next()) {
//     console.log(a.value);
//     setTimeout(() => {
//         console.log('Inside wait');
//     }, 1000);
// }