$(function(){
    console.log("page loaded");
    const element = $('#header-container');
    const scrollThreshold = $("#header").offset().top;
    $.event.add(window, "scroll", () => {
        const p = $(window).scrollTop(); // how much has the user scrolled
        $(element).css('position', p > scrollThreshold ? 'fixed' : 'absolute');
        $(element).css('top', p > scrollThreshold ? - scrollThreshold : '');
    })
})