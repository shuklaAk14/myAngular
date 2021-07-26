function ff() {
    let ss = '';
    for (let i = 0; i < 10; i++) {
        ss += 'Log(' + i + ')=' + Math.log(i) + ';';
    }
    return ss;
}

module.exports = ff;