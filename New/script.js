const btn = document.getElementById("btn")
const T1 = document.querySelector(".T1")
 const T2 = document.querySelector(".T2")
 const T3 = document.querySelector(".T3")
 const T4 = document.querySelector(".T4")


    // function comment(){
    //     T1.style.display = "block"
    // }
    function addcomment(){
        let user = document.querySelector(".user1")
        let T1 = document.querySelector(".T1")
        let copycommentsection = T1.cloneNode(true)
        copycommentsection.id = "T1{{forloop.counter}}"
        user.appendChild(copycommentsection)
        T1.style.display= "block"

    }
    function addcomment1(){
        let user1 = document.querySelector(".user2")
        let T2 = document.querySelector(".T2")
        let copycommentsection = T2.cloneNode(true)
        copycommentsection.id = "T2{{forloop.counter}}"
        user1.appendChild(copycommentsection)
        T2.style.display= "block"

    }
    function addcomment2(){
        let user2 = document.querySelector(".user3")
        let T3 = document.querySelector(".T3")
        let copycommentsection = T3.cloneNode(true)
        copycommentsection.id = "T3{{forloop.counter}}"
        user2.appendChild(copycommentsection)
        T3.style.display= "block"

    }
    function addcomment3(){
        let user3 = document.querySelector(".user4")
        let T4 = document.querySelector(".T4")
        let copycommentsection = T4.cloneNode(true)
        copycommentsection.id = "T4{{forloop.counter}}"
        user3.appendChild(copycommentsection)
        T4.style.display= "block"

    }
    const send1 = document.getElementById("send")
    const edit1 = document.getElementById("edit")
    const del1 = document.getElementById("del")
    const tarea1 = document.getElementById("Tarea1")
    const tarea2 =document.getElementById("Tarea2")
    const tarea3 =document.getElementById("Tarea3")
    const tarea4 =document.getElementById("Tarea4")
    const del2 = document.getElementById("del1")
    const del3 = document.getElementById("del2")
    const del4 = document.getElementById("del3")
    
//for james comment section
    function commenting(){
         tarea1.readOnly=true
    
    }
    function editing(){
         tarea1.readOnly=false
    
    }
    function deleting(){
        T1.parentElement.removeChild(T1)


    }
    //for Jake comment Section
    function commenting1(){
        tarea2.readOnly=true
   
   }
   function editing1(){
        tarea2.readOnly=false
   
   }
   function deleting1(){
       del2.parentElement.remove()


   }
   //for sara comment section
   function commenting2(){
    tarea3.readOnly=true

}
function editing2(){
    tarea3.readOnly=false

}
function deleting2(){
   del3.parentElement.remove()


}
//for diana comment section
function commenting3(){
    tarea4.readOnly=true

}
function editing3(){
    tarea4.readOnly=false

}
function deleting3(){
   del4.parentElement.remove()


}
   