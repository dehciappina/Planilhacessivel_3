

document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 1
});


        document.querySelector('.price_tag').style.transform = "translateY( -" + (window.pageYOffset / 50) + "vh)"

        document.querySelector('.planilha').style.transform = "translateY(" + (window.pageYOffset / 25) + "vh)"   

    document.body.onscroll = function() {

        document.querySelector('.price_tag').style.transform = "translateY( -" + (window.pageYOffset / 50) + "vh)";
    
        document.querySelector('.planilha').style.transform = "translateY(" + (window.pageYOffset / 25) + "vh)";
    
        
        if(window.pageYOffset > (window.innerHeight / 3)) {
            goTop.classList.add('go_top_show')
        } else {
            goTop.classList.remove('go_top_show')
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


