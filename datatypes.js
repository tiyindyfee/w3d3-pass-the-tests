// We load our libraries at the top of the script
var moment = require('moment')

// String object methods
var word = '     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.     '

//console.log(word.length) // <-- property (a variable essentially)
//console.log(word.toUpperCase()) // <-- method (a function essentially)
//console.log(word.toLowerCase())
//console.log(word.trim())
// word = word.toUpperCase()
// word = word.trim()
// word = word.toLowerCase()
//word = word.toUpperCase().trim().toLowerCase()

var word = 'City of Seattle'

//word = word.repeat(20)
//word = 'Pizza Is Amazing'.substr(9,7)
//word = 'Pizza Is Amazing'.slice(9,16)
//word = word.split(',')
var indianaIndexStart = word.indexOf('Indiana')
var whatIsTheLetter = word.charAt(8)
var isItIndianapolis = word.includes('Seattle')
word = word.replace('Seattle', 'Indianapolis')
//console.log(word)

// Pattern matching
var phoneNumber = 'Phone Number 317-489-9184 888-389-3489'
var hasPhoneNumber = phoneNumber.match(/\d\d\d-\d\d\d-\d\d\d\d/)
var hasPhoneNumber = phoneNumber.replace(/\d\d\d-\d\d\d-\d\d\d\d/gi, '[Redacted]')
//console.log(hasPhoneNumber)

// Number object methods
var number = Number('1')
number = number + (number * 50)
number = number + 1
number++

// Scoping and incrementing a variable
var numberOfTimesWeDidSomething = 0

function doSomething() {
    //var numberOfTimesWeDidSomething = 0
    //numberOfTimesWeDidSomething = 0
    numberOfTimesWeDidSomething++
}

doSomething()
doSomething()
doSomething()
doSomething()
doSomething()

//console.log(numberOfTimesWeDidSomething)

// Math methods
var price = 12.01
//var priceRounded = Math.round(price)
//var priceRounded = Math.ceil(price)
var priceRounded = Math.floor(price)
//console.log(priceRounded)
//console.log(Math.PI)

// Random numbers
var randomNumber = Math.round(Math.random() * 10)
//console.log(randomNumber)

// Currency / pricing
// Use accounting.js
// http://openexchangerates.github.io/accounting.js/
// npm install --save accounting


// Date methods
var today = new Date()
//console.log(today)

// Moment.js for Dates instead:
// http://momentjs.com/
// npm install --save moment
var yesterday = moment().subtract(2400, 'seconds')
//console.log(yesterday.format('MM/DD/YYYY HH:mm:ss'))

// Object
var pizza = Object()
var pie = {
    ingredients: 'stuff',
    meat: 'pepperoni',
    cheese: 'mozzarella',
    price: 14.99,
    priceRounded: Math.round(14.99),
}
//console.log(pie.priceRounded)

// Array
var ingredients = [
    'meat',
    'cheese',
    'sauce',
    'spices',
    'crust',
    12,
    true,
    moment().format('MM/DD/YYYY'),
    {
        sausage: 'mystery'
    }
]
//console.log(ingredients)

var name = String('Tom')
var name2 = 'Tom'
//console.log(name === name2)

var number = Number(1)// === 1
var boolean = Boolean(true)// === true
