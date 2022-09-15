const Pop_Menu = document.querySelector('.PPMENU')

const date = new Date();

const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();



function Clock(){
    var target = document.getElementById("Box_Fire");

    target.style.background = "red";
}