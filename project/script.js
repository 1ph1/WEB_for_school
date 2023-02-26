let randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
console.log(randomNumber)

let score = document.querySelector(".best_score")

let lifes = 10



function checkValue() {
    let playerAnswer = document.querySelector(".answer")
    console.log(playerAnswer.value)
    // if(playerAnswer.value == randomNumber){
    //     if(lifes)
    // }
}