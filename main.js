const btn = document.querySelector('.btn');
const ratingsContainer = document.querySelector('.ratings-container');
const ratings = document.querySelectorAll('.rating');
const panel = document.querySelector('#panel');

let selectedRating = 'Satisfied';


ratingsContainer.addEventListener('click', (e)=> {
    if (e.target.parentNode.classList.contains('rating')){
        ratings.forEach(rating => rating.classList.remove('active'))
        e.target.parentNode.classList.toggle('active');
        selectedRating = e.target.nextElementSibling.innerText;
    }
})


btn.addEventListener('click', ()=> {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our costumer support</p>
    `
})
