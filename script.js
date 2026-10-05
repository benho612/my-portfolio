// Mobile menu: the burger opens and closes the links; picking a link closes it again
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('open'));
    nav.addEventListener('click', () => nav.classList.remove('open'));
}
