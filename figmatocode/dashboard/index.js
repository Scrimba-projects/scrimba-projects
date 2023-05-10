// javascript
if (typeof  document !== 'undefined') {
    console.log('you are on the browser')
}
else {
    console.log('you are on the server')
}
const menuBtn = document.querySelector('.menu-btn')
      backBtn = document.querySelector('.back-btn')
menu = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(0)';
})

backBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(-100%)';
})