const mm = require('./nine');
const mm2 = new mm();

// console.log(mm2.f1());
// console.log(mm2.f2(21));
// console.log(mm2.f3(2, 3));

var c = 0;
let aa = function () {
    var b = (
        function () {
            c += 1;
            console.log(c);
        }
    )()
}
aa();