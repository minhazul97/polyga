/*Header Nav Functionality*/
const headerBar = document.querySelector('.bars');
const headerCross = document.querySelector('.cross');
const headerMobileMenu = document.querySelector('.header__nav-mobile');

if(headerBar){
    headerBar.addEventListener('click', e => {
        e.preventDefault();
        headerMobileMenu.classList.add('header__nav-mobile--active')
    })
}
if(headerCross){
    headerCross.addEventListener('click', e => {
        e.preventDefault();
        headerMobileMenu.classList.remove('header__nav-mobile--active')
    })
}

const headerNavItem = document.querySelectorAll('.js-desktop');
if(headerNavItem){
    headerNavItem.forEach((item,index)=>{
        item.addEventListener('click', e => {
            e.preventDefault();
            const preActiveItem = document.querySelector('.js-desktop--active');
            if(preActiveItem){
                preActiveItem.classList.remove('js-desktop--active');
                headerNavItem[index].classList.add('js-desktop--active');
            }else{
                headerNavItem[index].classList.add('js-desktop--active');
            }
        })
    })
}
