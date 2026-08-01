const {add,sub,mul,div} = require('./module.js')
const math = require('./module.js')


console.log('Addition:', math.add(8,7))
console.log('Subtraction:', math.sub(8,7))
console.log('Multiplication:', math.mul(8,7))
console.log('Division:', math.div(8,7))

console.log('Addition:', add(8,7))
console.log('Subtraction:', sub(8,7))
console.log('Multiplication:', mul(8,7))
console.log('Division:', div(8,7))