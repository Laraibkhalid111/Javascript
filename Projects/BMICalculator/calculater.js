 const form = document.querySelector('form')
 
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const weight = parseInt(document.querySelector('#weight').value)
    const height = parseInt(document.querySelector('#height').value)
    const result = document.querySelector('#result')
    if(height === ''|| isNaN(height) || height <= 0){
        result.innerHTML= `please give me valid height ${height}`
    }
    else if(weight === ''|| isNaN(weight) || weight <= 0){
        result.innerHTML= `please give me valid weight ${weight}`
    }
    else{
        const bmi = ( weight / ((height / 100) ** 2) ).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`;
        if(result > 0 && result < 18.5){
            result.innerHTML += `<span > Underweight </span>`;
        }
        else if(result >= 18.5 && result < 24.9){
            result.innerHTML += `<span> Normal weight </span>`;
        }
        else if(result >= 25 && result < 29.9){
            result.innerHTML += `<span> Overweight </span>`;
        }
        else{
            result.innerHTML += `<span> Obesity </span>`;
        }
    }

});
