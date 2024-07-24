var productContainer = document.getElementById("product-box")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")
search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()
    for (count = 0; count < productlist.length; count = count + 1) {
        var productname = productlist[count].querySelector("p").textContent
        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }
})
var sidenavbar = document.querySelector(".side-navbar")
var togglemenu = document.querySelector(".navbar-menu-toggle")
var xmark = document.querySelector(".xmark")
togglemenu.addEventListener("click",function(){
    sidenavbar.style.display="block"

})
xmark.addEventListener("click",function(){
    sidenavbar.style.display="none"
})