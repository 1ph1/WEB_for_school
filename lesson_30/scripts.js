const left = document.querySelector(".player-0")
const right = document.querySelector(".player-1")

const scoreLeft = document.getElementById("score-0")
const scoreRight = document.getElementById("score-1")

const currentLeft = document.getElementById("current-0")
const currentRight = document.getElementById("current-1")

const dice = document.querySelector(".dice")
const btnNew = document.querySelector(".btn_new")
const btnRoll = document.querySelector(".btn_roll")
const btnHold = document.querySelector(".btn_hold")

const rSound = new Audio("hruk.mp3")
const sound = new Audio("gimn.mp3")

scoreLeft.innerHTML = 0
scoreRight.innerHTML = 0

const initState = () => {
    totalScores = [0, 0]
    currentScore = 0
    activePlayer = 0

    scoreLeft.innerHTML = 0
    scoreRight.innerHTML = 0
    currentLeft.innerText = 0
    currentRight.innerHTML = 0
    dice.classList.add("hidden")

    left.classList.add("active")
    right.classList.remove("active")
}

initState()

const switchPlayer = () => {
    document.getElementById(`current-${activePlayer}`).innerHTML = 0
    activePlayer = activePlayer == 0 ? 1: 0;

    currentScore = 0

    left.classList.toggle("active")
    right.classList.toggle("active")
}

btnRoll.addEventListener("click", () => {
    const diceSide = Math.trunc(Math.random()*6) + 1
    dice.src = `img/dice-${diceSide}.png`
    dice.classList.remove("hidden")
    if (diceSide != 1){
        currentScore += diceSide
        document.getElementById(`current-${activePlayer}`).innerHTML = currentScore
    }else{
        rSound.play()
        switchPlayer()
    }
})

btnHold.addEventListener("click", () => {
    totalScores[activePlayer] += currentScore
    document.getElementById(`score-${activePlayer}`).innerHTML = totalScores[activePlayer]
    switchPlayer()  
})

btnNew.addEventListener("click", () => {
    initState()
})