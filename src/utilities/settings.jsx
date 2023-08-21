export const Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,        // Enable autoplay
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1040,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};