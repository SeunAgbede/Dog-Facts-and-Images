const dog_quote = document.querySelector('#dog_quote');
const dog_img = document.querySelector('#dog_img');
const img_btn = document.querySelector('#img_btn');
const quo_btn = document.querySelector('#quo_btn');

quo_btn.addEventListener('click', getQuo)
img_btn.addEventListener('click', getDog)
    
async function getDog() {
    // error handling to manage Server error responses
    try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await res.json(); 
        dog_img.innerHTML = `<img src="${data.message}">`
    } catch (err) {
        dog_img.innerHTML = `<p>${err.message}</p>`;
    }
};


async function getQuo() {
    // error handling to manage Server error responses
    try {
        const res = await fetch('https://cors-everywhere.herokuapp.com/https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1');
        const data = await res.json();
        dog_quote.innerHTML = data[0].fact;
    } catch (err){
        dog_quote.innerHTML = `<p>${err.message}</p>`; 
    }
};


