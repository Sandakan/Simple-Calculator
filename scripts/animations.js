var burgerMenuOpen = false;
var backgroundClick = false;

function toggleBurgerMenuVisibility() {  
    if(burgerMenuOpen){
        document.getElementById("burger-button-font").classList.remove("burger-button-font-active");
        document.getElementById("burger-menu").classList.remove("burger-menu-active");
        burgerMenuOpen = false;
    }else{
        document.getElementById("burger-button-font").classList.add("burger-button-font-active");
        document.getElementById("burger-menu").classList.add("burger-menu-active");
        burgerMenuOpen = true;
    }
}
function forceCloseBurgerMenu() {  
    if(burgerMenuOpen){
        document.getElementById("burger-button-font").classList.remove("burger-button-font-active");
        document.getElementById("burger-menu").classList.remove("burger-menu-active");
        burgerMenuOpen = false;
    }
}
