
document.getElementById('btn1').onclick = tempConvert;
document.getElementById('btn2').onclick = clearFrom;

function tempConvert() {
    var fahrenheit = document.getElementById("Fahrenheit").value;
    var celcius = document.getElementById("Celcius").value;
    
    if (fahrenheit != '') {
        celcius = (parseFloat(fahrenheit) -32) /1.8; 
    } else {
        fahrenheit = (parseFloat(celcius) * 1.8) + 32;
    }

    document.getElementById('Fahreinheit').value = parseFloat(fahrenheit);
    document.getElementById('Celcius').value = parseFloat(celcius);

}

function clearFrom() {
    document.getElementById('Fahrenheit').value = '';
    document.getElementById('Celcius').value = '';
}
