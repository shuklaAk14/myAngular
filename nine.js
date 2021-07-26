const MyOwnMod = function () {
    this.f1 = function () {
        return Math.sqrt(2);
    }
    this.f2 = function (a) {
        return Math.pow(a, 2);
    }
    this.f3 = function (a, b) {
        return a * b;
    }
}

module.exports = MyOwnMod;