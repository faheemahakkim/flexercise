const menuButton = document.querySelector('.menu-button')
const menuLinks = document.querySelector('nav .links')

menuButton.addEventListener('click',toggleMobileMenu)
function toggleMobileMenu(){
    menuLinks.classList.toggle('open')
}