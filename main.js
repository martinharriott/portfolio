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

$(document).ready(function () 
{
    $('.submit').click(function (event) 
    {
        console.log('Clicked');

        var name = $('.name').val();
        var email = $('.email').val();
        var subject = $('.subject').val();
        var message = $('.message').val();
        var statusElm = $('.status');
        statusElm.empty();

        if (!(email.length > 5 && email.includes('@') && email.includes('.')))
        {
            event.preventDefault();
            statusElm.append('<div>Email is invalid</div>');
        }

        if (message.length < 2)
        {
            event.preventDefault();
            statusElm.append('<div>Message is invalid</div>')
        }
    })
})