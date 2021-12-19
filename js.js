var button=document.querySelectorAll(".competence_button");var text=document.querySelectorAll(".bonus_text");var span=document.querySelectorAll(".bonus_text span");var last=document.querySelector("#last_but")
var last_text=document.querySelector("#last_text")
var main_button=document.querySelector(".button")
var port=document.querySelector("#port")
var contact=document.querySelector("#cont")
var comp=document.querySelector("#comp")
var book_button=document.querySelector(".book_button");var book_text=document.querySelector(".book_bonus_text");var header=document.querySelector(".header");var nav=document.querySelectorAll("nav div");port.onclick=function(){document.getElementById("portfolio").scrollIntoView()}
document.getElementById("logo").onclick=function(){document.getElementById("main").scrollIntoView()}
contact.onclick=function(){document.getElementById("contact").scrollIntoView()}
comp.onclick=function(){document.getElementById("competences").scrollIntoView()}
main_button.onclick=function(){document.getElementById("book").scrollIntoView()}
book_button.onclick=function(e){if(book_text.classList.contains("show_text")){book_text.classList.remove("show_text");e.target.innerHTML="Plus"}else{book_text.classList.add("show_text");e.target.innerHTML="Moins"}}
for(i=0;i<button.length-1;i++){button[i].classList.add(i)
button[i].onclick=function(e){var num=e.target.classList.item(1)
if(text[num].classList.contains("show_text")){text[num].classList.remove("show_text");span[num].classList.add("hidden")
e.target.innerHTML="Plus"}else{text[num].classList.add("show_text");span[num].classList.remove("hidden")
e.target.innerHTML="Moins"}}}
last.onclick=function(){if(last_text.classList.contains("show_text")){last_text.classList.remove("show_text");last.innerHTML="Plus"}else{last_text.classList.add("show_text");last.innerHTML="Moins"}}
window.onscroll=function(){var y=window.scrollY;if(y!=0){header.classList.remove("transparent");nav.forEach(function(item){item.classList.remove("transparent_nav")})}else{header.classList.add("transparent");nav.forEach(function(item){item.classList.add("transparent_nav")})}}