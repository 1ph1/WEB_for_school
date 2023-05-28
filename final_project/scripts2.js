const buy = document.querySelectorAll(".buy-pizza");
const corsinaScreen = document.querySelector(".pizza_final")
const corsina = document.querySelector(".pizza_final_button");
const pay = document.querySelector(".pay")

const peperoni = document.querySelector(".pep")
const meat = document.querySelector(".meat")
const mixed = document.querySelector(".mix")


corsinaScreen.classList.add("hidden")
corsina.addEventListener("click", function() {
    corsinaScreen.classList.remove("hidden")
})

buy.forEach((btn) => {
    btn.addEventListener("click", ()=> {
        const id = btn.id
        if(id==`pep`){
            peperoni.classList.remove("hidden")
        }else if(id==`meat`){
            meat.classList.remove("hidden")
        }else{
            mixed.classList.remove("hidden")
        }
    })
});

pay.addEventListener("click", function() {
    window.location.href = 'index3.html'
})