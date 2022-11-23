//https://dog.ceo/api/breeds/image/random

let img = document.querySelector('img');

//promise syntax 1 .then()
//chaining .then()s together while passing in callback 
//functions and took in return values from the previous function calls

//promise syntax 2: async / await

let dogAPIrequest = async () => {
    
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    let data = await response.json();
    console.log(data);
    img.src = data.message
}
dogAPIrequest()








//part2


let weatherForm = document.querySelector("#weatherForm");
let cityInput = document.querySelector("#cityInput");

let temp = document.querySelector("#temperature");


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //console.log(input.value)
    fetch(encodeURI(`https://goweather.herokuapp.com/weather/{${cityInput.value}}`))
        .then(res => {
            //console.log(res.json())
            return res.json()

        })
        .then(data => {
            console.log(data)
           

            //city.innerText = input.value
            temp.innerHTML = data.temperature;
            wind.innerHTML = data.wind;
            description.innerHTML = data.description;

        });
});