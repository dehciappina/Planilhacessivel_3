
document.body.onscroll = function() {
        document.querySelector('.price_tag').style.transform = "translateY( -" + (window.pageYOffset / 40) + "vh)"

        document.querySelector('.planilha').style.transform = "translateY(" + (window.pageYOffset / 25) + "vh)"
        
}

document.body.onresize = function() {
    document.querySelector('.big_price form').style.transform = "translateX(-50%) scale(" + (window.innerWidth / 1600) + ")"
}


document.querySelector('.big_price form').style.transform = "translateX(-50%) scale(" + (window.innerWidth / 1600) + ")"
