
let varibl = 3;
switch (varibl) {
    case 1:
    case 4:
        alert('second');
    default:
        console.log('default')
}




let a = +prompt();
let b = +prompt();
let c = +prompt();

// let proverka = a > b ? alert("больше" + " " + a) : (a === b) ? alert('they are ravni') : alert('больше ' + " " + b)





if (c > b && c > a) {
    alert(c)
}
else if (a > b && a > c) {
    alert(a)
}
else if (b > c && b > a) {
    alert(b)
}
else {
    alert("ravnie")
}

if ((c || b) < a) {
    alert(a)
}
else if ((a || b) <c) {
    alert(c)
}

else {
    alert(b)
}



// let n = 10;
// let arr = [];
// for (let i = 0; i < n; i++) {

//     arr.push(+prompt())

// }
// alert(Math.max(...arr))