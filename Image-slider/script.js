const scrollControl = document.querySelector(".gallery");
const backbtn =document.getElementById("backbtn")
const nextbtn =document.getElementById("nextbtn")

scrollControl.addEventListener("wheel",(event)=>{
    event.preventDefault();
    scrollControl.scrollLeft+=event.deltaY;
});

nextbtn.addEventListener("click",()=>{
    scrollControl.style.scrollBehavior ="smooth";
    scrollControl.scrollLeft+=300;
})
backbtn.addEventListener("click",()=>{
    scrollControl.style.scrollBehavior ="smooth";
    scrollControl.scrollLeft-=300;
})