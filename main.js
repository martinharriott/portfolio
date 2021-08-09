console.log('js load');

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos <= currentScrollPos && $(window).width() < 680) {
        document.getElementById("navbar").style.top = "-120px";
    } else {
        document.getElementById("navbar").style.top = "0";
    }
    prevScrollpos = currentScrollPos;
}