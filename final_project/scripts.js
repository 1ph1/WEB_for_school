const start = document.querySelector(".order_pizza");
const fpage = document.querySelector(".first_page");
const spage = document.querySelector(".second_page");

const order = document.querySelector(".pizza_button");
const adress = document.querySelector(".order_place");
const overlay = document.querySelector(".overlay");

const submit = document.querySelector(".submit");
const city = document.querySelector(".city");
const street = document.querySelector(".street");
const building = document.querySelector(".building");

const pech = document.querySelector(".pech")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

start.addEventListener("click", function() {
    start.classList.add("hidden")
    spage.classList.remove("hidden");
    pech.style.animation = "skalingMainPech ease-in 1s"
    sleep(1000).then(() => { 
        fpage.classList.add("hidden"); 
    });
    
});

order.addEventListener("click", function() {
    adress.classList.remove("hidden")
    overlay.classList.remove("hidden")
});


submit.addEventListener("click", function() {
    alert(`
        Данные верны?
        город ${city.value}, улица ${street.value}, дом ${building.value}

        Если данные не верны, то заного введите данные 
    `);
    overlay.classList.add("hidden")
    adress.classList.add("hidden")
    window.location.href = 'index2.html'
});

