const btnShowModal = document.querySelectorAll(".btn");
const close = document.querySelector(".close")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")

const closeModal = () => {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

btnShowModal.forEach((btn) => {
    btn.addEventListener("click", function() {
        modal.classList.remove("hidden")
        overlay.classList.remove("hidden")
    })
})

close.addEventListener("click", closeModal)

document.addEventListener("keydown", function(e){
    if(e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal()
    }
})