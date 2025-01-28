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

## Project 4 solution
```JavaScript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const Reaminig = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');


const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }
     else if(guess < 1){
        alert('Please enter a number morethan 1')
    }
     else if(guess > 100){
        alert('Please enter a  number less than 100')
    } 
    // this condition is for duplicate value not allowed in prev array!
    else if(prevGuess.includes (guess)){
        alert('You have already guessed this number!');
     }
     else{
        prevGuess.push(guess)
        if(numGuess >= 10){
            displayGuess(guess)
            displayMessage(`Game over. Random Number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You Guessed it right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOO low`)
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is TOO high`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess},  `
    numGuess++;
    Reaminig.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newgame">Start New Game</h2>`;
    startover.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newgame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        Reaminig.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startover.removeChild(p);

        playGame = true;
    })
}
```