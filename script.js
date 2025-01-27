let btn = document.getElementById("no");
let btn2 = document.getElementById("yes");
let p = document.getElementById("para");
let img = document.getElementById("image");


btn2.addEventListener("click", function(event){
    event.preventDefault();
    img.src = "https://media.tenor.com/ZhNxfL0GmoMAAAAj/mocha-bear-hearts.gif";
    p.innerHTML = "YAYYYYYY";
})

btn.addEventListener("mouseover", function(event){
    event.preventDefault();
    let x = Math.floor(Math.random()*500) + 1;
    let y = Math.floor(Math.random()*500) + 1;
    btn.style.left = x + 'px';
    btn.style.bottom = y + 'px';
})