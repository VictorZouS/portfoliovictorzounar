/*abre e fecha o menu */
 const nav = document.querySelector("#header nav")
 const toggle = document.querySelectorAll("nav .toggle")

 for (const element of toggle) {
    element.addEventListener("click", function () {
       nav.classList.toggle('show')
    }) 
 }

/* Sair do menu quando clicar em uma opção */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/* Mudar header da página quando altura quando scrollar */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
}  else {
    header.classList.remove('scroll')
   }
})

// SCROLLREVEAL -> Revela elementos ao scrollar.
const scrollReveal = ScrollReveal({
    origin: "bottom",
    distance: "30px",
    duration: 700,
    reset: true
})

scrollReveal.reveal(`
    #home .image, #home .text, #home .button,
    #about .image, #about .text, 
    #socialmedia .text, #socialmedia .card,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `, { interval: 50 
})

// Button back-to-top

const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function() {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
}   else {
    backToTopButton.classList.remove('show')
}
})

// Menu ativo conforme a seção visível na página

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for(const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')

        }  else {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')

        }
    }
}