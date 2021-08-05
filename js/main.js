$('.center').slick({
    centerMode: true,
    slidesToShow: 3,
    centerPadding: "10%",
    arrows: false,
});

$(".header-icon").click(function(){
    $(".icon").toggleClass("close");
});
$(".back").click(function(){
    $(".icon").toggleClass("close");
});