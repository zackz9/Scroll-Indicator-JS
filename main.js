$(window).scroll( function() {

    let windowTop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();

    let scrolled = (windowTop / (docheight-winheight)) * 100;


    $('.scroll-line').css('width', (scrolled + '%'));

});