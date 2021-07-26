const Books = require("./fifth");

const myBooks = () => {
    let bArr = [];
    let arr1 = ['Ramayan', 'Gita', 'Mahabharat', 'Adventures of tom sawyer', 'God of small things', 'Monk Who Sold His Ferrari'];
    let arr2 = ['Valmiki', 'Krishna', 'Ved Vyas', 'Mark Twain', 'Arundhati Roy', 'Robin Sharma'];
    let arr3 = ['Epic', 'Epic', 'Epic', 'Fiction', 'Fiction', 'Inspirational'];
    for (let i = 0; i < arr1.length; i++) {
        var book = new Books(arr1[i], arr2[i], arr3[i]);
        bArr.push(book);
    }
    return bArr;
}

module.exports = myBooks;