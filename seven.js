const myFunAA = function () {
    this.fun1 = function () {
        console.log('First function');
    }
    this.fun2 = function () {
        console.log('Second Function');
    }
    this.MyCar = function (name, brand, type) {
        this.name = name;
        this.brand = brand;
        this.type = type;
    }
    this.MyAuto = class {
        static tt = 'Gods Own Country';
        constructor(aname, atype) {
            this.aname = aname;
            this.atype = atype;
        }
    }
}

module.exports = myFunAA;
