// console.clear();
console.log('Welcome to Javascript');
var r = 100;//Global it is visible to everyone of the functions or 
//classes in the file
let rr = 21.222;//Block level variable
const ll = 54.5555;//It cannot be reassigned
let y = 'Gods must be crazy';
console.log(y);
let bb = true;
console.log(bb);

// for (let i = 0; i < 10; i++) {
//     console.log(i + 1);
// }

let j = 0;
let s = '';
for (; ;) {
    if (j < 10) {
        s += j + ' ';
    } else {
        break;
    }
    j++;
}
console.log(s);

let y1 = 0;
// while (y1 < 10) {
//     console.log(Math.sqrt(y1));
//     y1++;
// }

// while (true) {
//     if (y1 > 10) {
//         break;
//     }
//     console.log(Math.sqrt(y1));
//     y1++;
// }

// do {
//     console.log(Math.sqrt(y1));
//     y1++;
// } while (y1 < 10);

let arr = [21, 22, 23, 24, 25];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];//Recreated Everytime
//     console.log(element);
// }

// for (const k in arr) {
//     console.log(arr[k]);
// }

// for (const i of arr) {
//     console.log(i);
// }

//Abstraction,Encapsulation,Inheritance, Polymorphism

//class(Ideal,nomem) and object(manifestation,memory)



class Cars {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }

    mymeth = () => {

    }

}
// console.clear();
let obj1 = new Cars('Octavia', 'Skoda');
let obj2 = new Cars('Empress', 'Ambassador');
let obj3 = new Cars('Punto', 'Fiat');
let obj4 = new Cars('Zen', 'Maruti');
let obj5 = new Cars('Thar', 'Jeep');
let cArr = [obj1, obj2, obj3, obj4, obj5];

for (let i = 0; i < cArr.length; i++) {
    console.log(cArr[i]);
}

function myFun() {
    console.log('hai');
}
myFun();

const tFun = () => {
    console.log('hai');
}
tFun();

const lFun = (p1, p2) => {
    return p1 + p2;
}
console.log(lFun(2, 3));

const tFun2 = () => {
    console.log('hai');
}
tFun2();

const tFun4 = function () {
    console.log('*hai');
}

tFun4();

const tFun3 = p1 => {
    console.log(p1);
}
console.log(tFun3(21));

const tFun5 = function (p1) {
    console.log(p1);
}
tFun5('Jayesh');
// console.clear();
//Constructor Function

function Person(name, email, mobile) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
}

let per1 = new Person('Gunvanth', 'Gunvanth@yahoo.com', '93939393993');
console.log(per1);

class MyPerson {
    constructor(name, email, mobile) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
    }

    toString() {
        return this.name + '\t' + this.email + '\t' + this.mobile
    }
}

let oPer = new MyPerson('Ganesh', 'Ganesh@yahoo.com', '9939393939');
console.log(oPer.toString());











