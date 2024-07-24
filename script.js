//selecting elements
var popupoverly = document.querySelector(".popupoverlay")
var popupbox = document.querySelector(".popup-box")
var addbutton = document.getElementById("add-popup-button")
  
addbutton.addEventListener("click",function(){
    popupoverly.style.display="block"
    popupbox.style.display="block"
})

//select Cancel Button
var cancelbuttton = document.getElementById("cancel")
cancelbuttton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverly.style.display="none"
    popupbox.style.display="none"
})
//select requiure elements
var container = document.querySelector(".container")
var addbutton = document.getElementById("add")
var addbook = document.getElementById("book-title-input")
var addauthor = document.getElementById("book-author-input")
var adddescription = document.getElementById("book-description-input")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML= `<h1>${addbook.value}</h1>
    <h5>${addauthor.value}</h5>
            <p>${adddescription.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverly.style.display="none"
    popupbox.style.display="none"
})
  
function deletebook(event) {
    event.target.parentElement.remove()

}
