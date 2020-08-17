
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



// const someArray = ['Hello', 'world', '!'];
// someArray[0] = 'Bye';
// console.log(someArray.join(' '))



// const secondArr = ['a', 'v', 'c'];
// const thirdArr = [1, 2, 3];
// let finallyArray = secondArr.concat(thirdArr)
// console.log(finallyArray)




// const someString = [1, 2, 3]
// const addToArray = ['a', 'b', 'c'];
// someString.forEach(item => {
//     addToArray.push(item)
// })

// console.log(addToArray)


// const someBul = confirm();


// // function someFunct(param = true) { ------->>>> значение по умолчанию 
// function someFunct(param) {
//     if (param === true) {
//         return "yes"
//     }
//     return 'no'
// }
// console.log(someFunct(someBul))



// let functTernary = param => param === true ? 'ternary yes' : 'ternary no'
// console.log(functTernary(someBul))




// let funcExp = param => {
//     if (param === true)
//         return 'yeah boy'
//     return "god no please"
// }
// console.log(funcExp(someBul))



// Number.isIteger() ==> true, false 


// let x = 0;
// while (x < 5) {
//     console.log(x)
//     x++;
// }
// // проверяет потом выполняет 

// let i = 0;

// do {
//     i++;
//     console.log(1)
// }
// while (i < 10)

// // do{} while() -- сначала делает потом проверяет 
// let obj = {
//     name: 'keke',
//     age: '18',
//     you: undefined,
//     kekekk: "ok"
// }
// for (key in obj) {

//     if (obj[key] === undefined) {
//         break;
//     } else {
//         console.log(obj[key])
//     }
// }


// //filter - return new obj with filtred property 


// //map - возвращает новый массив 

// // forEach - текущее состояние массива не меняется , а значит массив остается, лишь выполняются действия над массивом 


// //first
// const arr = [];

// for (let i = 0; i <= 10; i++) {
//     arr.push(i)
// }
// console.log(arr)

// //second
// const numbers = [];
// let number = 0;
// while (number < 9) {
//     number++;
//     numbers.push(number)
// }
// console.log(numbers.join(''))

// //thirs
// let someArr = ['good', 'evening', 'to', 'everyone'];

// someArr.join('')
// console.log(someArr.join(' '))

// ///////second solution
// let num = 0;
// let someString = '';
// while (num < 10) {
//     num++;
//     someString += `${num}`
// }
// console.log(someString)

// //fourth

// let functionsNumbers = (a, b, c) => (c > 0) ? ((a - b) / c) : `number c must be positive, you number is ${c}`;

// console.log(functionsNumbers(10, 4, 2))

// //five

// function func(number) {
//     let newArr = [];
//     for (let i = 0; i <= number; i++) {
//         newArr.push(i)
//     }
//     return newArr;
// }
// console.log(func(6))



// //second solution 

// let someFunct = (num) => {
//     const returnedArr = []
//     let i = 0;
//     while (num >= i) {
//         returnedArr.push(i)
//         i++;
//     }
//     return console.log(returnedArr);
// }
// someFunct(9)

// // solution with checked

// function arrGenerate (num) {
//     let i = 0;
//     const returnedArr = [];
//     parseFloat(num);
//     if (!isNaN(num)) {
//         while(i < num) {
//             returnedArr.push(i)
//             i++;
//         }
//         return returnedArr
//     }
//     else {
//         return 'your number is string'
//     }
// }
// console.log(arrGenerate('2'))


//выносить повторяющиеся операции в отедльную функцию , а не  писать множество раз 
const express = require('express');
const {users} = require('./users/users-mock')
const app = express();

app.use('/users', users)

app.get('/', (request, response) => {
    response.send('this is homepage')
})

app.listen(3000, () => {
    console.log('server starting')
})

