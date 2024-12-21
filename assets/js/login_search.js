/*
 * FUNCTION SEARCH FORM
*/
const searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    card.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


/*
 * FUNCTION LOGIN
*/
const loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    card.classList.remove('active');
    navbar.classList.remove('active');

}

/*
 * FUNCTION NAVBAR
*/
const navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    card.classList.remove('active');
}


window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    card.classList.remove('active');
}