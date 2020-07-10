
// // let varibl = 3;
// // switch (varibl) {
// //     case 1:
// //     case 4:
// //         alert('second');
// //     default:
// //         console.log('default')
// // }




// // let a = +prompt();
// // let b = +prompt();
// // let c = +prompt();

// // // let proverka = a > b ? alert("больше" + " " + a) : (a === b) ? alert('they are ravni') : alert('больше ' + " " + b)





// // if (c > b && c > a) {
// //     alert(c)
// // }
// // else if (a > b && a > c) {
// //     alert(a)
// // }
// // else if (b > c && b > a) {
// //     alert(b)
// // }
// // else {
// //     alert("ravnie")
// // }

// // if ((c || b) < a) {
// //     alert(a)
// // }
// // else if ((a || b) <c) {
// //     alert(c)
// // }

// // else {
// //     alert(b)
// // }



// // let n = 10;
// // let arr = [];
// // for (let i = 0; i < n; i++) {

// //     arr.push(+prompt())

// // }
// // alert(Math.max(...arr))


// // {/* <br> 

// // Method of strings 
// // <br>
// // let name = 'myname'
// // console.log(
// // name.length
// // )


// // const cars = [];
// // cars.push('some')
// // console.log(cars)


// // FUNCTION

// // function declaration --- function someFunc () {}
// // fuction expression    let name = () => {}

// arguments - function (666)
// parameters - function(name, lel)



const someArray = ['Hello', 'world', '!'];
someArray[0] = 'Bye';
console.log(someArray.join(' '))



const secondArr = ['a', 'v', 'c'];
const thirdArr = [1, 2, 3];
let finallyArray = secondArr.concat(thirdArr)
console.log(finallyArray)




const someString = [1, 2, 3]
const addToArray = ['a', 'b', 'c'];
someString.forEach(item => {
    addToArray.push(item)
})

console.log(addToArray)


const someBul = confirm();
function someFunct(param) {
    if (param) {
        console.log("yes")
    } else {
        console.log("no")
    }
}
someFunct(someBul)



let functTernary = (param) => param ? 'ternary yes' : 'ternary no'
console.log(functTernary(someBul))




let funcExp = (param) => {
    if (param)
        console.log('yeah boy')
    else {
        console.log("god no please")
    }
}
funcExp(someBul)
