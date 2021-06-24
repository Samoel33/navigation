const bar = document.querySelector('.bar');
const menu = document.querySelector('.menu-hold');
const body = document.querySelector('body');


bar.addEventListener('click', () => {
    menu.classList.toggle('show-bar');
    bar.classList.toggle('move-bar');
    bar.classList.toggle('children');
    if (body.style.backgroundColor) {
        body.style.backgroundColor = ''
    } else {
        body.style.backgroundColor = 'gold';
    }

})