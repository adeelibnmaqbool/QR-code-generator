# QR Code Generator
QR Code genrator is a simple application in HTML, CSS, JavaScript. It generates QR Code on user text

![plot](./default.png)

## How To Make a QR Code Generator in JavaScript?
You can download the given files by clickining "Code" button
Or you can follow the mentioned bellow steps to make this app

### 1- Create Basic File Structure
For this project we need three files and one image
- index.html
- style.css
- script.js
- default.png

### 2- HTML Code
Open ```index.html``` and add the given below code.

```<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Code Generator App in JavaScript</title>

    <!-- Google Fonts CDN -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="style.css">

    <!-- Custom JS -->
    <script src="script.js" defer></script>

</head>
<body>
    <div class="container">
        <h2>QR Code Generator</h2>
        <form id="qr-form">
            <small class="error">OPPS! Please Enter Text</small>
            <input type="text" id="input" placeholder="Ente Text here...">
            <button type="submit" class="submit">Generate Code</button>
        </form>
        <img src="./default.png" class="output" alt="" draggable="false">
    </div>
</body>
</html>
```

### 3- Style Your application
Now, Open ```style.css``` and add the given below code.
```*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    min-height: 100vh;
    background: #f1f2f5;
    display: grid;
    place-items: center;
    font-family: 'Libre Baskerville', serif;
}
.container{
    width: 350px;
    background: #fff;
    padding: 40px 25px;
    border-radius: 10px;
    box-shadow: 0 0 10px #ebebeb;
    text-align: center;
}
.container h2{
    margin-bottom: 15px;
    color: #ea580c;
    line-height: 1.5;
}
#qr-form{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
}
#qr-form input,
#qr-form button{
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    border: 1px solid #ebebeb;
    outline: none;
    margin-bottom: 10px;
}
#qr-form input:focus{
    border-color: #ea580c;
}
#qr-form button{
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    background: #f97316;
    color: #fff;
}
#qr-form button:hover{
    background: #ea580c;
}
#qr-form .error{
    margin-bottom: 10px;
    font-weight: 700;
    color: red;
    visibility: hidden;
}
.container img{
    width: 150px;
    margin-top: 10px;
    filter: blur(4px);
    border: 1px solid #ebebeb;
}

@media screen and (max-width: 500px){
    .container{
        width: 90%;
    }
}
```

### 4- Last Step
Now, Open ```script.js``` and add the given below code.
```const form = document.querySelector("#qr-form")
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
```