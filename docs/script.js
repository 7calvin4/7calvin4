const wrapper = document.querySelector('.wrapper');
const Login = document.querySelector('.btnContact');
const iconClose = document.querySelector('.icon-close');

Login.addEventListener('click', ()=> {
    wrapper.classList.add('popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('popup');
});