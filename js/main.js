$(document).ready(function(){
    //NavBar Slidetoggle
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });

    //Stickey Navbar
    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if (sc > 50) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    })
})