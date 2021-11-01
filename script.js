$(document).ready(function(){
    $('.main-slider > .slider').slick({
      dots : true ,
      infinite : true ,
      autoplaySpeed: 5000 ,
      autoplay: true ,
      prevArrow: $(".main-slider > .btn > .left-btn"),
      nextArrow: $(".main-slider > .btn > .right-btn"),
      
      responsive: [ { breakpoint: 600, // 화면의 넓이가 600px 이상일 때 
                     settings: { slidesToShow: 1, slidesToScroll: 1 }},
                   { breakpoint: 320, // 화면의 넓이가 320px 이상일 때 
                    settings: { slidesToShow: 1, slidesToScroll: 1 } } ]
  
    });
    
    $('.altostv-wrap > .altostv-bottom-box > .slider').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: $(".altostv-wrap > .btn > .left-btn"),
      nextArrow: $(".altostv-wrap > .btn > .right-btn"),
    });
      
      $('.photo-wrap > .photo-bottom-box > .slider').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: $(".photo-wrap > .btn > .left-btn"),
      nextArrow: $(".photo-wrap > .btn > .right-btn"),
    });

  });