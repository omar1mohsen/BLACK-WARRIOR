//scroll up
let scroller = document.querySelector(".scrollUp")
window.onscroll = function(){
    if(this.scrollY >= 110){
        scroller.classList.remove("disable")
    }else{
        scroller.classList.add("disable")
    }
}
//start spaceShip
document.querySelector(".scrollUp").onclick = ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
    checkLinks()
    document.getElementById("home").classList.add("active")
}
document.querySelector(".pink").onclick = ()=>{
pink = "#A61F69"
    document.documentElement.style.setProperty("--main-color", pink);
}
document.querySelector(".dark").onclick = ()=>{
blue = "#254bbd"
    document.documentElement.style.setProperty("--main-color", blue);
}

// end spaceShip
//start navbar
const navLink = document.querySelectorAll(".nav-link")
let links = Array.from(navLink)

function checkLinks() {
    links.forEach((link)=>{
        link.classList.remove("active")
    })
}
for(let i = 0 ; i<links.length;i++){
    navLink[i].addEventListener("click" ,()=>{
                checkLinks()
                navLink[i].classList.add("active")
    })
}

//end navbar
//home - slider
let heroImages = document.querySelectorAll(".slider img")
let heroImagesArray = Array.from(heroImages)
let currentshow = 0;

// when window start loading
window.onload = ()=> {
   let loading = setInterval(()=>{
        if(document.querySelector(".loader").style.width = "100%"){
            clearInterval(loading)
            document.querySelector(".loader").style.display = "none"
        }
    },1000)

for(let i = 0 ; i <= heroImages.length ; i++){
    
checkSlider()

    setInterval(()=>{
        if(currentshow < heroImagesArray.length){
        checkSlider()
        } else {
        currentshow = 0 ;
        checkSlider()
        }
        currentshow++;
    },4000)
}
}
//end of home sec

//start of game-play sec

//end of game-play sec

//game-items
// check class for each element
function checkSlider (){
    heroImages.forEach((ele,index) =>{
        ele.classList.remove("active")
        if(currentshow == index){
            ele.classList.add("active")
        } 
    }) 
    Array.from(document.querySelectorAll(".slider-show span")).forEach((ele,index)=>{
        ele.classList.remove("active")
        if(currentshow == index){
            ele.classList.add("active")
        } 
    })
}
// end of hero

// send slider

let itemsArray = Array.from(document.querySelectorAll(".item-box"))
let next = document.querySelector(".next")
let prev = document.querySelector(".prev")
let itemRate =  document.querySelectorAll(".item-number")
let currentSlide = 0;

next.addEventListener(("click"),()=>{
    nextSlide()
})

prev.addEventListener(("click"),()=>{
    prevSlide()
})

slideChecker()

function nextSlide (){
    reomveclasse()
    if(currentSlide < (itemsArray.length - 1)){
        currentSlide++;
    }
    itemsArray.map((slide,index)=>{
      if (currentSlide == index){
                next.classList.remove("disabled")
                slideChecker()
        }

    })
}

function prevSlide (){
    reomveclasse()
    if(currentSlide > 0){
        currentSlide--;
    }
    itemsArray.map((slide,index)=>{
      if (currentSlide == index){
        slideChecker()
        }

    })

}

function slideChecker(){
    if(currentSlide == 0){
        prev.classList.add("disabled")
    }else { 
        prev.classList.remove("disabled")
    }
    if(currentSlide == (itemsArray.length - 1)){
        next.classList.add("disabled")
    }else{
        next.classList.remove("disabled")
    }
    itemsArray[currentSlide].classList.add("active")
    itemRate[currentSlide].innerHTML = "0"
    let goal = itemRate[currentSlide].dataset.num
    let counter = setInterval(()=>{
        itemRate[currentSlide].innerHTML++;
       if( itemRate[currentSlide].innerHTML == goal  ){
        clearInterval(counter)
    }
    },2000 / goal )
}

function reomveclasse(){
    itemsArray.forEach((slide)=>{
        slide.classList.remove("active")
    })
}
//start heros sec
let heroes = document.querySelectorAll(".charc-box")
let heroBoxs = Array.from(heroes)
let progress = document.querySelectorAll(".charc-box .progress")

//another idea with array.from

// heroBoxs.forEach((heroBox)=>{
//     heroBox.addEventListener("mouseenter", function(){
//         progress.forEach((ele)=>{
//             ele.style.setProperty("--skill-Width", ele.dataset.porgress);
//             ele.style.setProperty("--skill-transtion", "1s");
//         })
//       });
// }) 

for(let i = 0; i < heroes.length;i++){
heroBoxs[i].addEventListener("mouseenter", function(){
    progress.forEach((ele)=>{
        ele.style.setProperty("--skill-Width", ele.dataset.porgress);
        ele.style.setProperty("--skill-transtion", "1s");
    })
}) 
}
for(let i = 0; i < heroes.length;i++){
heroBoxs[i].addEventListener("mouseleave", function(){
    progress.forEach((ele)=>{
        ele.style.setProperty("--skill-Width", "0%");
        ele.style.setProperty("--skill-transtion", "0s");
    })
}) 
}


//end heros sec

// start sing up 

let showPass = document.querySelector(".pass .pass-eye")


function showPassword(){
    let pass = document.querySelector(".pass-inp")
    if (pass.type === "password") {
        pass.type = "text";
       showPass.classList.remove("fa-eye")
        showPass.classList.add("fa-eye-slash")
      } else {
        pass.type = "password";
        showPass.classList.add("fa-eye")
        showPass.classList.remove("fa-eye-slash")
      }
}
// end sing up 
