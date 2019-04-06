$('.slide-container').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  centerPadding: "10px",
  prevArrow: $('.left-arrow-slide'),
  nextArrow: $('.right-arrow-slide'),
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
$('.slide-container-second').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  prevArrow: $('.left-arrow-slide-inv'),
  nextArrow: $('.right-arrow-slide-inv'),
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
$('.slide-container-third').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  prevArrow: $('.left-arrow-slide-inv-copy'),
  nextArrow: $('.right-arrow-slide-inv-copy'),
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-elements');
  const body = document.querySelector('body');


  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    body.classList.toggle('mobile-scroll-lock')
  })
}

navSlide();