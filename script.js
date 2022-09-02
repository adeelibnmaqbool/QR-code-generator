const form = document.querySelector("#qr-form")
const input = document.querySelector("#input")
const output = document.querySelector(".output")
const error = document.querySelector(".error")
const submitBTN = document.querySelector(".submit")

// On Form Submission
form.addEventListener("submit", async (e)=>{
    e.preventDefault()

    // Reset previous Record
    error.style.visibility = "hidden"
    output.style.filter = "blur(4px)"
    
    // Check is input field empty
    const isEmpty = /([^\s])/.test(input.value)
    
    // If Empty then return false with message
    if(!isEmpty){
        error.style.visibility = "visible"
        return false
    }
    
    // Change Submit Button Text
    submitBTN.textContent = "loading..."

    // Fetch Data From API
    const API = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${input.value}`
    let response = await fetch(API)
    
    // Change Image URL in HTML
    output.src = response.url
    output.style.filter = "blur(0)"

    // Change Submit Button Text
    submitBTN.textContent = "Generate Code"

})

// Reset previous record when using is typing
input.addEventListener("input", ()=>{
    output.style.filter = "blur(4px)"
    error.style.visibility = "hidden"
})