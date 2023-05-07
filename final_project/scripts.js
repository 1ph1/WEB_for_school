const start = document.querySelector(".order_pizza");
const Fpage = document.querySelector(".first_page");
const Spage = document.querySelector(".second_page");

const order = document.querySelector(".pizza_button");
const adress = document.querySelector(".order_place");
const overlay = document.querySelector(".overlay")

const submit = document.querySelector(".submit")
const city = document.querySelector(".city")
const street = document.querySelector(".street")
const building = document.querySelector(".building")

start.addEventListener("click", function() {
    Spage.classList.remove("hidden")
    Fpage.classList.add("hidden")
});

order.addEventListener("click", function() {
    adress.classList.remove("hidden")
    overlay.classList.remove("hidden")
})

const closeModal = () => {
    adress.classList.remove("hidden")
};

document.addEventListener("keydown", function(e){
    if(e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal()
    }
});


submit.addEventListener("click", function() {
    alert(`
        Данные верны?
        город ${city.value}, улица ${street.value}, дом ${building.value}

        Если данные не верны, то заного введите данные 
    `);
    overlay.classList.add("hidden")
    adress.classList.add("hidden")

})