

const btnMenu = document.querySelector('.icon-menu');
const drawerNav = document.querySelector('.nav-drawer');
const navDrawerItem = document.querySelectorAll('.nav-drawer__item');
const btnDrawerClose = document.querySelector('.nav-drawer__btn-close');

AOS.init()

btnMenu.addEventListener('click',  showOrHideDrawerNavigation )

navDrawerItem.forEach( element => {
    element.addEventListener('click', showOrHideDrawerNavigation )
})

btnDrawerClose.addEventListener('click', showOrHideDrawerNavigation)

function showOrHideDrawerNavigation(){
    drawerNav.classList.toggle('nav-drawer--open') 
}