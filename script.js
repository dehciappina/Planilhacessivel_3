
document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 1
});


const header = document.querySelector('header');
const h1 = document.querySelector('.h1_container h1');
const h1Span = document.querySelector('.h1_container h1 span');
const headerContactContainer = document.querySelector('.header_contact_container');
const headerContactContainerSpan = document.querySelector('.header_contact_container span:first-child');

const goTop = document.querySelector('.go_top');

document.body.onscroll = function() {

    
    document.querySelector('.bg2').style.transform = "translateY(" + (window.pageYOffset / 1.25) + "px)";
    

    if (window.matchMedia("(max-width: 90vh)").matches) {
        if(window.pageYOffset > (window.innerHeight / 3)) {
            goTop.classList.add('go_top_show')
        } else {
            goTop.classList.remove('go_top_show')
        }
    } else {
        if(window.pageYOffset > (window.innerHeight / 3)) {
            header.classList.add('header_shrink')
            h1.classList.add('h1_shrink')
            h1Span.classList.add('h1Span_shrink')
            headerContactContainer.classList.add('header_contact_shrink')
            headerContactContainerSpan.classList.add('header_contact_span_shrink')
            goTop.classList.add('go_top_show')
        } else {
            header.classList.remove('header_shrink')
            h1.classList.remove('h1_shrink')
            h1Span.classList.remove('h1Span_shrink')
            headerContactContainer.classList.remove('header_contact_shrink')
            headerContactContainerSpan.classList.remove('header_contact_span_shrink')
            goTop.classList.remove('go_top_show')
        }
    }
}

function goToTop() {
    let calc = (- window.pageYOffset / 30) - 3
    if (window.pageYOffset > 0) {
        window.scrollBy(0, calc);
        setTimeout(goToTop, 0);
    }
}

goTop.addEventListener('click', function() {
    goToTop()
})


const aboutButton = document.querySelector('#aboutButton');
const aboutAnchor = document.querySelector('#about_anchor');

aboutButton.addEventListener('click', function() {
    window.scrollTo({top:(aboutAnchor.offsetTop - (window.innerHeight / 7)), behavior:'smooth'})
})


const productButton = document.querySelector('.see_products');
const productAnchor = document.querySelector('.product_anchor');


productButton.addEventListener('click', function() {
    window.scrollTo({top:(productAnchor.offsetTop - (window.innerHeight / 7)), behavior:'smooth'})
})


const goToMail = document.querySelector('#goToMail');
const mailArea = document.querySelector('#mailArea')

function goToMailArea() {
    window.scrollTo({top:mailArea.offsetTop - (window.innerHeight /7), behavior:'smooth'})
}

goToMail.addEventListener('click', goToMailArea)



setInterval(function() {
    if(document.title == "8 Soluções em Planilhas do Excel que Otimizarão o seu Negócio") {
        document.title = "Planilhacessível - Soluções em Planilhas do Excel"
    } else {
        document.title = "8 Soluções em Planilhas do Excel que Otimizarão o seu Negócio"
    }
}, 2000)