$(document).ready(function () {
  $(".previous").click(function () {
    $(".clients").slick("slickPrev");
  });
  $(".next").click(function () {
    $(".clients").slick("slickNext");
  });
  $(".clients").slick({
    arrows: false,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
