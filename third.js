const tt = require('./mods');
const mt = require('./mods2');
const nt = require('./mods3');
const bact = require('./fourth');
const bArr = require('./sixth');


// console.log(tt);
// mt.name = "Guruvayurappan";
// console.log(mt);
// // console.log(nt());
// let ar = nt().split(';');//converting string to an array
// ar.forEach(n => console.log(n));
// const bObj = new bact('Gayatri', 'Bank Of Bahrain and Kuwait', 'Qatar');
// console.log(bObj);
// console.log(bArr());
//bArr().forEach(n => console.log("Name:" + n.bname + "\nAuthor:" + n.bauth + "\nType:" + n.btype + "\n"));

//select * from books where type='Epic'
// bArr().filter(n => n.btype === 'Epic').forEach(n => console.log("Name:" + n.bname + "\nAuthor:" + n.bauth + "\nType:" + n.btype + "\n"));
//select * from books where type<>'Epic'
// bArr().filter(n => n.btype != 'Epic').forEach(n => console.log("Name:" + n.bname + "\nAuthor:" + n.bauth + "\nType:" + n.btype + "\n"));
// bArr().filter(n => (n.btype != 'Epic' && n.btype != 'Fiction')).forEach(
//     n => console.log("Name:" + n.bname + "\nAuthor:" + n.bauth + "\nType:" + n.btype + "\n")
// )

let bbArr = [];
bArr().filter(n => (n.btype === 'Epic' || n.btype === 'Inspirational'))
    .forEach(
        //n => console.log("Name:" + n.bname + "\nAuthor:" + n.bauth + "\nType:" + n.btype + "\n")
        n => bbArr.push(n)
    )
let seta = new Set();

seta.add(21);
seta.add(21);
seta.add(21);
seta.add(21);
seta.add(21);
seta.add(7);
seta.add(33);
seta.add(4);
seta.add(55);
// console.log(seta);
let rr = Array.from(seta);
// console.log(rr);

let myMap = new Map();
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['Gandhinagar', 'Gurjari', 'Rajkot', 'Dwarka', 'Vadodra'];
for (let i = 0; i < arr1.length; i++) {
    myMap.set(arr1[i], arr2[i]);
}
// myMap.forEach(n => console.log(n));
// for (const itr of myMap.entries()) {
//     console.log(itr);
// }

// for (const itr of myMap.keys()) {
//     console.log(itr + " " + myMap.get(itr));
// }

// console.log(myMap.entries());

// for (let i = 0; i < arr1.length; i++) {
//     const tta = myMap.get(i);
//     console.log(tta);

// }

// let kk = Array.from(myMap.keys());
// console.log(kk);
// kk.forEach(k => console.log(k + " " + myMap.get(k)))

Array.from(myMap.entries()).forEach(n => console.log(n));







