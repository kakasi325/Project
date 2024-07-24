var sidenavbar = document.querySelector(".side-navbar")
var togglemenu = document.querySelector(".navbar-menu-toggle")
var xmark = document.querySelector(".xmark")
togglemenu.addEventListener("click",function(){
    sidenavbar.style.display="block"

})
xmark.addEventListener("click",function(){
    sidenavbar.style.display="none"
})