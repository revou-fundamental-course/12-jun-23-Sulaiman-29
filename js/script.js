const numberRegex = /^[0-9]+$/;
const inputField = document.getElementById("inputField")

inputField.addEventListener('keypress', function(event){
    if (!numberRegex.test(event.key)) {
        console.log(event.key)
        event.preventDefault()
    } 
})
