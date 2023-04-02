const tabsBtn = document.querySelectorAll(".tab");
const articles = document.querySelectorAll(".content");

tabsBtn.forEach((tab) => {
    tab.addEventListener("click", function() {
        const currentTab = tab; // активный таб
        const id = currentTab.dataset.id;
        console.log(id);

        tabsBtn.forEach((btn) => {
            btn.classList.remove("active")
        })
        currentTab.classList.add("active")

        articles.forEach((article) => {
            article.classList.remove("active")
        })
        let element = document.getElementById(id) 
        element.classList.add("active")
    })
})