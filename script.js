// let body= document.querySelector("body")
// let butt= document.querySelector("button")


// let func=()=>{
//     butt.onmouseover=()=>{
//         butt.style.color="blue";
//     }
//     butt.onclick=()=>{
//         console.log("hi");
//         window.location.href="index.html#home";
//     }
// }
// func();


let body = document.querySelector("body");
let butt = document.querySelector("button");

butt.addEventListener("mouseover", () => {
    butt.style.backgroundColor = "red";
});
butt.addEventListener("mouseout", () => {
    butt.style.backgroundColor = ""; // Reset to default color
    console.log("hovered");
});

butt.addEventListener("click", () => {
    window.location.href="https://nirmalbasyal.com.np/"
    console.log("clicked");
});
