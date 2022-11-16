`use strict`

let btnEl = document.getElementById("btn");
let msgEl = document.getElementById("msg");

btnEl.addEventListener("click", ()=>{
    msgEl.classList.remove("hide");
    msgEl.classList.add("show");
    const myTimeout = setTimeout(greet, 5000);
    function greet() {
        msgEl.classList.remove("show");
        msgEl.classList.add("hide");
        console.log(msgEl);
    }
    console.log(msgEl);
});