// For loop 

for( let i=0;i<5;i++){
    console.log("Number is : ",i+1)
}

console.log("---------------------------------------")

// for of loop

const days = ["monday", "tuesday", "wednesday", "thrusday", "friday", "satrusday", "sunday"]
for(const day of days){
    console.log(day)
}

console.log("---------------------------------------")

// for in loop

const weekDays = ["monday", "tuesday", "wednesday", "thrusday", "friday", "satrusday", "sunday"]
for(const day in weekDays){
    console.log(weekDays[day])
}

console.log("---------------------------------------")


// for loop using indexing
for( let i=0;i<days.length;i++){
    console.log(days[i])
}

console.log("---------------------------------------")

// while loop

let num = 1;
while(num <= 10){
    console.log("current number is : ",num)
    num++
}

console.log("---------------------------------------")


// do while loop
let i=0;
do{
    console.log("hi this is do-block iteration",i+1)
    i++;
}while(i<3)

console.log("---------------------------------------")


// for in loop

const stud = {
    name : "shubham gupta",
    age : 24,
    job : "QA"
}

for( const key in stud){
    console.log(key , " : ", stud[key])
}


console.log("---------------------------------------")
