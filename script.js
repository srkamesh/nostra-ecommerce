// Selecting close button

var offersec = document.getElementById("offersec")
var close = document.getElementById("close")

close.addEventListener("click",function(){

    offersec.style.display="none"
})


//navbar
var sideNavMenu=document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})

//Selecting Banner

let banner = document.querySelector(".bannersec");
let arrow = document.querySelectorAll(".btn");
let imgList = ["1", "2"]


let index=0
arrow.forEach((button)=>{
    button.addEventListener("click",()=>{
        console.log("clicked")
       if(button.classList.contains("btn-left")) {
        index--;
        if(index<0){
             index = imgList.length-1;
        }
        banner.style.background =`url("./${imgList[index]}.jpg") center/cover fixed no-repeat`
       }
       else{
        index++;
        if (index===imgList.length){
            index = 0;
        }
        banner.style.background =`url("./${imgList[index]}.jpg") center/cover fixed no-repeat`

       }

    })
})

