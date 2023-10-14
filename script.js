let btn = document.getElementById("toggle");
let menuFloat = document.getElementById("menu");
let navElement = menuFloat.querySelector('nav');

window.addEventListener('resize', function() {
    let media = window.innerWidth;
    if (media >= 870 && menuFloat.classList.contains("menuFloat")) {
        navElement.style.display = "none";
    }if (media <= 870 && menuFloat.classList.contains("menuFloat")) {
        navElement.style.display = "flex";
    }
});

function handleclick() {
    btn.classList.toggle("active");
    menuFloat.classList.toggle("menuFloat")
    if (menuFloat.classList.contains("menuFloat")) {
        navElement.style.display = "flex";
        navElement.style.position = "fixed";
    } else {
        navElement.style.display = "none";
    }
}
