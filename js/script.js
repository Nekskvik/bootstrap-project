//------------------------------------------------------------------------------------
const card = document.querySelector(".cardd")
const container = document.querySelector(".banner")

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "all 0.2s ease";
});
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
//------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------
const nobtn = document.getElementById("nobtn")
const yesbtn = document.getElementById("yesbtn")

nobtn.addEventListener("click", (e) => {
    alert('Thank yout for your review ! I promise, we will do our best to get even better !')
});
yesbtn.addEventListener("click", (e) => {
    alert('Thank yout for your review ! I really appreciate it !!!')
});
//------------------------------------------------------------------------------------

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 50){
            $('nav').addClass("sticky");
        }else{
            $('nav').removeClass("sticky");
        }
    });
});