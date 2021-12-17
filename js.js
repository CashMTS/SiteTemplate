var header = document.querySelector(".header");
var nav = document.querySelectorAll("nav div");

window.onscroll = function () {
    var y = window.scrollY;
    if(y!=0){
        header.classList.remove("transparent");
        nav.forEach(function(item){
            item.classList.remove("transparent_nav");
        })

    }else{
        header.classList.add("transparent");
        nav.forEach(function(item){
            item.classList.add("transparent_nav");
        })
    }
}