

document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 1
});


if (window.matchMedia("(max-width: 90vh)").matches) {

    document.querySelector('.see_more').innerHTML = "Página Inicial";
    document.querySelector('#pagseguro_form_input').style.width = 55 + 'vw';

    document.body.onscroll = function() {
        
        if(window.pageYOffset > 0) {
            goTop.classList.add('go_top_show')
        } else {
            goTop.classList.remove('go_top_show')
        }
    }

} else {

    document.querySelector('.price_tag').style.transform = "translateY( -" + (window.pageYOffset / (document.body.clientHeight / 20)) + "vw)"

    document.querySelector('.planilha').style.transform = "translateY(" + (window.pageYOffset / 4) + "px)"   


    document.body.onscroll = function() {
        document.querySelector('.price_tag').style.transform = "translateY( -" + (window.pageYOffset / (document.body.clientHeight / 20)) + "vw)"

        document.querySelector('.planilha').style.transform = "translateY(" + (window.pageYOffset / 4) + "px)";
    
        
        if(window.pageYOffset > (window.innerHeight / 3)) {
            goTop.classList.add('go_top_show')
        } else {
            goTop.classList.remove('go_top_show')
        }
    }

}
    
const goTop = document.querySelector('.go_top');

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


