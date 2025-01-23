# Projects related to DOM

## project link
[click here](https://github.com/Om2807/js-om/tree/main/07_projects)

# solution code

## project 1

```javascript
console.log("Om")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'grey'){
          body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'white'){
          body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){
          body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
          body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'purple'){
          body.style.backgroundColor = e.target.id
        }
    });
});

```

## Project 2 solution
```javascript
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

```

## Project 3 solution
```javascript
// document.querySelector('#clock')
const clock = document.getElementById('clock')

setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

```