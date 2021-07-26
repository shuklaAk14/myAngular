function m1() {
    console.log('Gargoyle Gang');
}

async function m2() {
    await setTimeout(() => {
        m1()
    }, 5000);
}
// m2().then(console.log('Done'));

async function m3() {
    return 'Hello Iam async';
}

function m4() {
    console.log("Function AA");
}

async function m5(t) {
    return (t + " Akash");
}
async function m6(a) {
    console.log(a);
}

// m4();
// m5();
// m2().then(m5).then(m3).then(console.log).then(m6);
m5('Mr.').then(m6);

// m3().then(console.log);