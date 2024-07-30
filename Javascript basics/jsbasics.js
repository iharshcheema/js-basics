var a = 7
var b = 'hello world'
console.log(a)
console.log(b)

// Operators
// in 3+4 '3' and '4' are the operands and '+' is a operator

// 1.unary operators
// unary operators are the operators which works on a single operand

// example

var c = 13
var c = -c
console.log(c)

// 2.binary operators
// binary operators are the operators which works on more than a single operand

// example
var d = 7 + 10
console.log(d)

// Operands:
// Operands are the entities on which operators works

// Arithmetic operators in javascript
var num1 = 5
var num2 = 10

console.log('The value of num1 + num 2 is' + (num1 + num2))
console.log('The value of num1 - num 2 is' + (num1 - num2))
console.log('The value of num1 / num 2 is' + num1 / num2)
console.log('The value of num1 * num 2 is' + num1 * num2)

// Strings
var string = 'this is a string'
console.log(string)

// adding two or more strings
var name = 'harsh'
var characteristic = ' is a real person'
console.log(name + characteristic)

// tempelate literal
var temp = `${name}${characteristic}`

// another example of temp
var name = 'harman'
var city = 'yamunanagar'

var temp = `${name} lives in ${city}`
console.log(temp)

// length of a string
var fruit = 'orange'
var len = length.fruit
console.log(len)

//     \n is use to go to a new line
console.log(` My self\n My name is harsh\n I lives in ynr`)

// String functions:

// first occurence of a substring using .indexof(' ')
string = 'My name is harsh'
position = string.indexOf('n')
console.log(position)

// another example
str = 'Javascript'
pos = str.indexOf('script')
console.log(pos)
// we have to use the same name of the string before using the .indexof() property

// last index
str = 'This is a string'
position = str.lastIndexOf('is')
console.log(position)

// Substring from a string
var substring = string.slice(0, 7)
console.log(substring)

// another example
substr = str.slice(0, 4)
console.log(substr)
// here 4 will be excluded
// we can name wotever we want; whether substring of substr, we just have to keep in mind that we use the exact name of the string from which we want to slice

// Second method to extract substring from a string

substr = str.substr(1, 3)
console.log(substr)
// 1 and 3 indicates the starting and the ending i.e. 3 will be included

// replace
replaced = str.replace('This', 'It')
console.log(str)
console.log(replaced)

// Uppercase and lowercase
console.log(str.toUpperCase())
console.log(str.toLowerCase())

// concat
newstring = str.concat(' This will be added to the str string')
console.log(newstring)

// trim
string1 = '      this is a      new string      '
console.log(string1.trim())
// trim removes the white spaces before and after the written text of the string

// character of a string

charAt2 = str.charAt(2)
console.log(charAt2)
// i should be printed

// scope
let xyz = 'this is a string'
console.log(xyz)

{
  let xyz = 'this is a new string'
  console.log(xyz)
}

// another example
const abc = 'this is a string abc'
console.log(abc)
{
  const abc = 'hahaha'
  console.log(abc)
}
// if else statements
let age = 19
if (age > 18) {
  console.log('You can vote')
} else if (age == 17) {
  console.log('You cant vote')
} else {
  console.log('You can not vote')
}

// switch case statements
const cups = 15
switch (cups) {
  case 5:
    console.log('Their are 5 cups')
    break

  case 15:
    console.log('Their are 15 cups')
    break

  default:
    console.log('Their are 10 cups')
    break
}

//Arrays and objects
// Objects:

// this is how we can create a object:
let employee = {
  name: 'harsh',
  age: 22,
  salary: '50k',
  email: 'xyz@gmail.com',
}
console.log(employee)

// Arrays:
let names = ['Harsh', 'Harry', 'Lucas']
console.log(names)
console.log(names[1])

// this can also be written as
let names2 = new Array('Harsh', 'Harry', 'Lucas')
console.log(names2)

//length
console.log(names2.length)

// we can add elements at the end
names2.push('Frost')
console.log(names2)

// an array of 32 empty elements
names3 = new Array(32)
console.log(names3)
