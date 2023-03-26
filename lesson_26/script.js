const drumBtn = document.querySelectorAll(".drum")
const numberBtn = document.querySelectorAll(".drum").length

for (let i = 0; i < numberBtn; i++){
    drumBtn[i].addEventListener("click", function() {
        const btnInnerHtml = drumBtn[i].innerHTML
        makeSound(btnInnerHtml)
    })
}

document.addEventListener("keydown", function(event){
    makeSound(event.key)
})

const makeSound = (key) => {
    switch(key){
        case "w":
            const high_het = new Audio("sound/hh.mp3");
            high_het.play();
            break;
        case "d":
            const bass_drum = new Audio("sound/bb.mp3");
            bass_drum.play();
            break;
        case "a":
            const small_drum = new Audio("sound/mb.mp3");
            small_drum.play();
            break;
        default:
            console.log(`У тебя только w, d и a. Хватит нажимать другие кнопки!`)
    }
}