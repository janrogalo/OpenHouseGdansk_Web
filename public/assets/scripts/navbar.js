const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    // toggle nav
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link,index) =>{
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();











const events = document.querySelector('.events');

const zwiedzanie = document.querySelector('#zwiedzanie');
const spacer = document.querySelector('#spacer');
const spotkanie = document.querySelector('#spotkanie');
const wystawa = document.querySelector('#wystawa');
const koncert = document.querySelector('#koncert');
const wszystkie = document.querySelector('#wszystkie');


zwiedzanie.addEventListener('click', ()=>{
for (let i=0; i < events.children.length; i++){
    if(events.children[i].dataset.tag.includes('zwiedzanie') === false){
        events.children[i].style.display = "none";
    } else {
        events.children[i].style.display = "block";
    }
    }
})

spacer.addEventListener('click', ()=>{
    for (let i=0; i < events.children.length; i++){
        if(events.children[i].dataset.tag.includes('spacer') === false){
            events.children[i].style.display = "none";
        } else {
            events.children[i].style.display = "block";
        }
    }
})

spotkanie.addEventListener('click', ()=>{
    for (let i=0; i < events.children.length; i++){
        if(events.children[i].dataset.tag.includes('spotkanie') === false){
            events.children[i].style.display = "none";
        } else {
            events.children[i].style.display = "block";
        }
    }
})


wystawa.addEventListener('click', ()=>{
    for (let i=0; i < events.children.length; i++){
        if(events.children[i].dataset.tag.includes('wystawa') === false){
            events.children[i].style.display = "none";
        } else {
            events.children[i].style.display = "block";
        }
    }
})

koncert.addEventListener('click', ()=>{
    for (let i=0; i < events.children.length; i++){
        if(events.children[i].dataset.tag.includes('koncert') === false){
            events.children[i].style.display = "none";
        } else {
            events.children[i].style.display = "block";
        }
    }
})

wszystkie.addEventListener('click', ()=>{
    for (let i=0; i < events.children.length; i++){
            events.children[i].style.display = "block";
        }
});
