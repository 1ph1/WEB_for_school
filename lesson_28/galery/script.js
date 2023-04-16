const slides = document.querySelectorAll(".gallery_slide")

slides.forEach((slide) => {
    slide.addEventListener("click", () => {
        slides.forEach((slide) => {
            slide.classList.remove("active")
        })

        slide.classList.add("active")
    })
})