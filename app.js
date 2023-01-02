let $menu = document.querySelector("menu");

let $menuIcon = document.querySelector(".menu-icon");

let $closeIcon = document.querySelector(".close-icon");

$menuIcon.addEventListener("click", ()=> {
    $menu.classList.add('active');
});

$closeIcon.addEventListener("click", ()=> {
    $menu.classList.remove('active');
});