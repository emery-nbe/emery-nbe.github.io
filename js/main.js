const animates = ['animate__slideInLeft','animate__slideInRight', 'animate__pulse', 'animate__slideOutDown'];

const article = document.querySelector("article");

const aside = document.querySelector("aside");

article.classList.add('animate__animated',animates[0])

aside.classList.add('animate__animated',animates[1]);

aside.addEventListener('animationend', ()=>{
    aside.classList.remove(animates[1]);
    article.classList.remove(animates[0]);
})

