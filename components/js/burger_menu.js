$('.burger').on('click',function () {
    $('.menu-box').toggleClass('active');
    $('.burger').toggleClass('active')
});
$('.menu-items a').on('click',function () {
    $('.menu-box').removeClass('active');
    $('.burger').removeClass('active')
});
