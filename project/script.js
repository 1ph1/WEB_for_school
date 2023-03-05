let randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
console.log(randomNumber);
let answer = document.querySelector(".random_number")

let score = 0;
let finalScore = document.querySelector(".best_score_span");

let lifes = 10;
let lifesHtml = document.querySelector(".lifes_span");

let hint = document.querySelector(".hint")



function checkValue() {
    let playerAnswer = document.querySelector(".answer")
    console.log(playerAnswer.value)
    if(playerAnswer.value == randomNumber){
        answer.innerHTML = randomNumber
        if(lifesHtml>finalScore){
            finalScore.innerHTML=lifesHtml
        }
    }else if(playerAnswer.value > randomNumber){
        hint.innerHTML=`ЗАГАДАННОЕ ЧИСЛО МЕНЬШЕ ЧЕМ ЧИСЛО ИГРОКА`
        lifesHtml.innerHTML = lifes - 1
        --lifes
    }else{
        hint.innerHTML=`ЗАГАДАННОЕ ЧИСЛО БОЛЬШЕ ЧЕМ ЧИСЛО ИГРОКА`
        lifesHtml.innerHTML = lifes - 1
        --lifes
    }
}