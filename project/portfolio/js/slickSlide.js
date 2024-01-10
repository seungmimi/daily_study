$('.img-slide').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: true
});

$('.slider-for').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.pre-img'
});
$('.pre-img').slick({
  infinite: false,
  slidesToShow: 2.5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: false,
  focusOnSelect: true
});