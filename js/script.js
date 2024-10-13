/*Change Color Navbar*/
document.addEventListener('scroll', () => {
const nav = document.querySelector('nav');
if (window.scrollY >0) {
nav.classList.add('scrolled');
}else{
nav.classList.remove('scrolled');
}
});
//End
/* Change Mode Light and Dark WebSite*/
var chMode = document.getElementById("ChMode");
chMode.onclick = function() {
document.body.classList.toggle("dark-theme");
if (document.body.classList.contains("dark-theme")) {
chMode.src = "./img/turnoff.png";
}else{
chMode.src = "./img/turnon.png";
}
}
//End
/* Select NavBar */
var menu = document.getElementById("Menuu");
var sideBar = document.getElementById("AnyNavbar");
var closeSide = document.getElementById("closeSide");
menu.onclick = function() {
sideBar.style.right = "0px";
};
closeSide.onclick = function(){
sideBar.style.right = "-900px";
};
//End
/*Multiple Typing Text*/
var typed = new Typed(".secText",{
    strings : ["مرحبا بك في عالم الزراعة", "استثمر في المستقبل الأخضر", "كن رائدا في مجال الزراعة "],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
});
//End
/*
/*Slide Background Home
let imageHome = document.getElementById("HomeSectionn");
let changImageHome = ["url('./img/home1.jpg')", "url('./img/home2.jpg')", "url('./img/home3.jpg')"];
setInterval(function(){
    let rnd = Math.floor(Math.random()*changImageHome.length);
    imageHome.style.backgroundImage =  changImageHome[rnd];
},5000);
*/