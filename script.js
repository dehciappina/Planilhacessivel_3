const header = document.querySelector('header')
const h1 = document.querySelector('.h1_container h1')
const h1Span = document.querySelector('.h1_container h1 span')
const headerContactContainer = document.querySelector('.header_contact_container')
const headerContactContainerSpan = document.querySelector('.header_contact_container span:first-child')

document.body.onscroll = function() {
    console.log(window.pageYOffset)
    if(window.pageYOffset > (window.innerHeight / 3)) {
        header.classList.add('header_shrink')
        h1.classList.add('h1_shrink')
        h1Span.classList.add('h1Span_shrink')
        headerContactContainer.classList.add('header_contact_shrink')
        headerContactContainerSpan.classList.add('header_contact_span_shrink')
    } else {
        header.classList.remove('header_shrink')
        h1.classList.remove('h1_shrink')
        h1Span.classList.remove('h1Span_shrink')
        headerContactContainer.classList.remove('header_contact_shrink')
        headerContactContainerSpan.classList.remove('header_contact_span_shrink')
    }
}

