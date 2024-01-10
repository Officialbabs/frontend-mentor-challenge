const submitForm = document.querySelector("#emailform")

submitForm.addEventListener("submit", function(e){
    e.preventDefault()
    const email = document.querySelector("#email").value
    toggleCards()
    console.log("success", email)
})
const formCard = document.querySelector(".main"), successForm = document.querySelector(".success")
const toggleCards = () => {
    formCard.classList.toggle("show")
    successForm.classList.toggle("show")
}

const dismissBtn = document.querySelector("#dismiss")

dismissBtn.addEventListener("click", function(){
    toggleCards()
    document.querySelector("#email").value = ""})