let hrs=document.getElementById("hrs")
let min=document.getElementById("min")
let sec=document.getElementById("sec")


//single digit when it below 10sec...

// let startbtn = document.getElementById("startbtn")
// startbtn.addEventListener("click",()=>{
//     setInterval(()=>{
//         let currentTime = new Date();
    
//         hrs.innerHTML= currentTime.getHours()
//         min.innerHTML= currentTime.getMinutes()
//         sec.innerHTML= currentTime.getSeconds()
//     },1000)
// })


//to make Double digits when it below 10sec....


let startbtn = document.getElementById("startbtn")
startbtn.addEventListener("click",()=>{
    setInterval(()=>{
        let currentTime = new Date();
    
        hrs.innerHTML= (currentTime.getHours()<10?"0":"")+currentTime.getHours()
        min.innerHTML= (currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes()
        sec.innerHTML= (currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds()
    },1000)
})
