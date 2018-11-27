
document.body.onscroll = function() {
        document.querySelector('.price_tag').style.transform = "translateY( -" + (window.pageYOffset / 40) + "vh)"

        document.querySelector('.planilha').style.transform = "translateY(" + (window.pageYOffset / 25) + "vh)"
        
}
