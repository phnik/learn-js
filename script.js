// alert("TEST");

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
}
console.log("Hello World");
let a = 10;
let b = "string";
let human = {
    name: "Dat Nguyen", age: 19, University: "Phenikaa University", 'test_field': 'ahihi',
    a: function () {
        console.log("TEST function inside the object");
    }
};
console.log(`type of a: ${typeof a}
type of b: ${typeof b}
type of human: ${typeof human}
human information: name = ${human.name}, age = ${human.age}, Uni = ${human.University}, test_field = ${human.test_field}, just try this function: ${human.a()}`);
let array = [123, 321, 132];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

console.log(`type of ${typeof array} ${array}`);
console.log(array);

console.log(`a compare with b: ${a === b}`);

console.log(`${"abc" === new String("abc")}, ${typeof "abc"}, ${typeof new String("abc")}`);
let arrtest = ['Mu', 'Chelsea', 'Mancity']
for (var i = 0; i < arrtest.length; ++i) {
    console.log(`i = ${arrtest[i]}`);
    // if (i % 2 === 0) {

    // }
}

console.log(i);

for (let x = 0; x < 10; ++x) {
    console.log(x + 1);
}

function xy() {
    console.log("TEST FUNCTION");
}

xy();

sum = (a, b) => {
    return a + b;
}

console.log(sum(10, 15));

hihi = (a, b, c) => {
    return `AHIHI ${a + b}, ${c}`
}

console.log(hihi(1, 2, 3));

hihihi = function (a, b, c, d, callback) {
    let tong = a + b + c + d;
    setTimeout(() => {
        callback(tong);
    }, 5000);
}
printHihi = function (tong) {
    console.log(`HIHI =`, tong);
}

let arr = [1, 2, 3, 4, 5, 6];
//filter
let filter = arr.filter((item, index) => {
    console.log(`item ${item} >> index >> ${index}`);
    return item && item > 5;
});

console.log(filter);
//find
let find = arr.find((item) => {
    return item > 2;
});

console.log(find);
//map
let mapArr = arr.map((item) => {
    return item * item;
});
console.log(arr);
console.log(mapArr);
// reduce prototype
// array.reduce(callback(accumulator, currentValue, index, array), initialValue)

let sumOfArr = arr.reduce((previousItem, currentItem) => previousItem + currentItem);
console.log(`sumOfArr = ${sumOfArr}`);

//sort prototype

arr.sort((a, b) => {
    // console.log(arr);
    return b - a;
});

console.log(arr);

let json = [
    {
        platformId: 1,
        payout: 15,
        numOfPeople: 4
    },
    {
        platformId: 1,
        payout: 12,
        numOfPeople: 3

    },
    {
        platformId: 2,
        payout: 6,
        numOfPeople: 5

    },
    {
        platformId: 2,
        payout: 10,
        numOfPeople: 1
    },
];

// Asynchronous vs Synchronous

function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            const data = JSON.parse(this.responseText);
            const dataString = JSON.stringify(data);
            console.log(data);
            console.log(dataString);
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    xhttp.send();
}

//status code

// callback js

// function myDisplay(item){
//     console.log('callback:',item);
// }
let myDisplay = (item) => {
    console.log('callback test:', item)
}
function myFunctionX(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myFunctionX(10, 10, myDisplay);

//JSON stands for JavaScript Object Notation
//string to json: parse
//json to string: stringify
//callback hell
//Promises in JavaScript

const promiseExp = () => {
    return new Promise((resolve, reject) => {
        resolve('get some data with promise');
        reject('something wrongs');
    });
}

promiseExp().then(
    (item) => console.log(item)
    // (item) => console.log(`error with ${item}`)
).catch(error => console.log(error));

//chaining promises

const testPromise = () =>{
    return new Promise((resolve, reject) =>{
        resolve('resolve of promise 1')
        reject('reject of promise 1')
    })
}

testPromise()
    .then((value) => `vl1: ${value} >> then 1 >>`)
    .then((value) => `vl2: ${value} >> then 2 >>`)
    .then((value) => `${value} >> then 3 >>`)
    .then((value) => {
        console.log(`${value} => final >> then 4`)
    })
    .catch((reason) => console.log(`${reason} => catch`))

    // To experiment with error handling, "threshold" values cause errors randomly
const THRESHOLD_A = 8; // can use zero 0 to guarantee error

function tetheredGetNumber(resolve, reject) {
  setTimeout(() => {
    const randomInt = Date.now();
    const value = randomInt % 10;
    if (value < THRESHOLD_A) {
      resolve(value);
    } else {
      reject(`Too large: ${value}`);
    }
  }, 500);
}

function determineParity(value) {
  const isOdd = value % 2 === 1;
  return { value, isOdd };
}

function troubleWithGetNumber(reason) {
  const err = new Error("Trouble getting number", { cause: reason });
  console.error(err);
  throw err;
}

function promiseGetWord(parityInfo) {
  return new Promise((resolve, reject) => {
    const { value, isOdd } = parityInfo;
    if (value >= THRESHOLD_A - 1) {
      reject(`Still too large: ${value}`);
    } else {
      parityInfo.wordEvenOdd = isOdd ? "odd" : "even";
      resolve(parityInfo);
    }
  });
}

new Promise(tetheredGetNumber)
  .then(determineParity, troubleWithGetNumber)
  .then(promiseGetWord)
  .then((info) => {
    console.log(`Got: ${info.value}, ${info.wordEvenOdd}`);
    return info;
  })
  .catch((reason) => {
    if (reason.cause) {
      console.error("Had previously handled error");
    } else {
      console.error(`Trouble with promiseGetWord(): ${reason}`);
    }
  })
  .finally((info) => console.log("All done", info));

// fetch api

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((data) => {
//     return data.json();
    
//   })
//   .then(data => console.log(`hi`, data))

//async vs await

const getNewTodo = async(id) =>{
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    if(response && response.status !== 200){
        throw new Error('Some thing wrongs:' +  response.status);
    }
    let data = await response.json();
    return data;
}
getNewTodo('4321').then(data => {
    console.log(data);
})
.catch(err => console.log(err))
// console.log(`this is ${getNewTodo()}`); // this is a promise

//destructuring assignment 
//...
let arr1 = [1, 2, 3, 4, 5]
let state = {
    name: 'Dat Ng',
    address: 'Ha Noi'
}
const checkDes = (arr1) => {
    let arr2 = {...arr1, age: 19};
    console.log(arr2);
}
checkDes(state);