// If else

function checkAge(age) {
    if(age >= 18){
        console.log("You are old enough to buy yourself a coffie.")
    }else{
        console.log("you are just a child, let me buy it for you")
    }
}

checkAge(20);
checkAge(14);


// else if ladder

function checkGender(gender){
    if(gender == "male"){
        console.log("boy")
    }else if(gender == "female"){
        console.log("girl")
    }else{
        console.log("Enter a valid value")
    }
}

checkGender("m")
checkGender("male")
checkGender("female")

// nested if else

function score(num){
    if(num >= 90){
        console.log("Great score")
    }else{
        if(num >= 70){
            console.log("Its still a good score")
        }else{
            console.log("you should do better")
        }
    }
}

score(91)
score(21)
score(71)


// switch

function checkDay(day){
    switch(day){
        case "monday":
            console.log("Its monday")
            break;
        case "tuesday":
            console.log("Its tuesday")
            break;
        case "wednesday":
            console.log("Its wednesday")
            break;
        case "thrusday":
            console.log("Its thrusday")
            break;
        case "Monday":
            console.log("Its friday")
            break;
        case "satursday":
            console.log("Its satursday")
            break;
        default:
            console.log("its sunday")
            break;
    }
}

checkDay("satursday")


