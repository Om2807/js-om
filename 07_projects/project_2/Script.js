const form = document.querySelector('form')

//this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`  
    } else {
        const BMI =(weight /((height*height)/10000)).toFixed(2)
        //show the results
        results.innerHTML = `<span>${BMI}</span>`

        if (BMI < 18.6) {
            results.innerHTML  = `<span style="color:yellow;">Under weight:${BMI}</span>`;
        } else if (BMI >= 18.6 && BMI <= 24.9) {
            results.innerHTML  = `<span style="color:green;">Normal weight:${BMI}</span>`;
        } else {
            results.innerHTML  = `<span style="color:red;">Over weight:${BMI}</span>`;
        }
    }
    // results.innerHTML = `${height}`
    
});