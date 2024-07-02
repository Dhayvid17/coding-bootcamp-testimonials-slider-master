const nextOne = document.querySelector(".next-icon-i");
const prevOne = document.querySelector(".prev-icon-i");
const nextTwo = document.querySelector(".next-icon-ii");
const prevTwo = document.querySelector(".prev-icon-ii");
const pageOne = document.querySelector("main");
const pageTwo = document.querySelector("section");
console.log(pageOne)

nextOne.addEventListener("click", function(){

    if(pageOne.style.display === "none"){
        pageOne.style.display = "block"
        pageTwo.style.display = "none"
    } 
    else {
        pageOne.style.display = "none"
        pageTwo.style.display = "block"
    }
});

// prevOne.addEventListener("click", function(){
//     if(pageOne.style.display === "block"){
//         pageOne.style.display = "none"
//         pageTwo.style.display = "block"
//     } 
//     else {
//         pageOne.style.display = "block"
//         pageTwo.style.display = "none"
//     }
// });

// nextTwo.addEventListener("click", function(){

//     if(pageTwo.style.display === "block"){
//         pageTwo.style.display = "none"
//         pageOne.style.display = "block"
//     } else {
//         pageTwo.style.display = "block"
//         pageOne.style.display = "none"
//     }
// });

prevTwo.addEventListener("click", function(){

    if(pageTwo.style.display === "none"){
        pageTwo.style.display = "block"
        pageOne.style.display = "none"
    } else {
        pageTwo.style.display = "none"
        pageOne.style.display = "block"
    }
});