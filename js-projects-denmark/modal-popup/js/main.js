const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const openBtn = document.querySelector(".btn-open")
const closeBtn = document.querySelector(".btn-close")

const openPopup = () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}


const closePopup = () => {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

openBtn.addEventListener("click", openPopup)
closeBtn.addEventListener("click", closePopup)
overlay.addEventListener("click", closePopup)