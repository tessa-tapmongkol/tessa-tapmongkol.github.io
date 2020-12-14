window.onscroll = function() {fixedNavbar()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function fixedNavbar() {
    if(window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}