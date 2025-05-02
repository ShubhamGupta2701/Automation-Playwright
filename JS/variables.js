console.log("hello there, shubham is here!") // to print anything while the file is running and output can be seen inside the browser console.


// hoisting
var x
console.log(x)  // undefined
x = "xyz"
console.log(x)  // xyz


var n2 = 1
var n2 = 8 // this is also acceptable as var supports Re-initialization as well as re-assignment
n2 = 7


let n1 = 2
// let n1 = 3  // this is producing error as let doesn't support Re-declaration

n1 = 5 // this is ok as we are re-assigning the value


const team = "salesforce"
// team = "QA" // this will produce an error as we can't reassign value in const

console.log(team)

var str = "passes"
var num = 19
function check(){
    if(num > 10){
        var str = "its too great!"
        console.log(str)
    }
}
check()
console.log(str)
// console.log(newStr) //  can't use newStr outside of the function



let str2 = "passes let"
let num2 = 19
function check2(){
    if(num2 > 10){
        let newStr = "its too great let!"
        console.log(newStr)
    }
}
check2()
console.log(str2)



