// Inicialização do Jquery
$(function() {

  let scrollTarget = '.skills';
  let alreadyRun = false;

  $(window).on('scroll', (event) => {

    let scrollTop = $('html, body').scrollTop();
    let elementTop = $(scrollTarget).offset().top;

    if ((scrollTop >= (elementTop - 300)) && alreadyRun == false) {
      runRatioAnimator('#barCorelDraw', '#percentCorelDraw', 80);
      runRatioAnimator('#barAdobeillustrator', '#percentAdobeillustrator', 80);
      runRatioAnimator('#barAdobePhotoshop', '#percentAdobePhotoshop', 80);
      runRatioAnimator('#barAdobeIndesign', '#percentAdobeIndesign', 60);
      runRatioAnimator('#barAfterEffects', '#percentAfterEffects', 40);
      runRatioAnimator('#barAdobePremiere', '#percentAdobePremiere', 50);
      alreadyRun = true;
    }

    if (scrollTop <= 0) {
      runRatioAnimator('#barCorelDraw', '#percentCorelDraw', 0);
      runRatioAnimator('#barAdobeillustrator', '#percentAdobeillustrator', 0);
      runRatioAnimator('#barAdobePhotoshop', '#percentAdobePhotoshop', 0);
      runRatioAnimator('#barAdobeIndesign', '#percentAdobeIndesign', 0);
      runRatioAnimator('#barAfterEffects', '#percentAfterEffects', 0);
      runRatioAnimator('#barAdobePremiere', '#percentAdobePremiere', 0);
      alreadyRun = false;
    }

  })

  function runRatioAnimator(barId, percentId, maxSize) {
    let counter = -1;
    $(barId).animate({
      'width': `${maxSize}%`
    }, 1500);
    let startCount = setInterval(() => {
      counter++
      $(percentId).html(`${counter}%`);
      if (counter >= maxSize) {
        clearInterval(startCount);
      }
    }, 5);
  }

  if (window.matchMedia('(min-width: 992px)').matches) {
    console.log('Wide viewport');

    $('.experiencia .group-title').mouseenter(function() {
      $(this).closest('.col-lg-4').find('ul').slideDown();
    });

    $('.experiencia .col-lg-4').mouseleave(function() {
      $(this).closest('.col-lg-4').find('ul').slideUp();
    });
  } else {
    console.log('Small viewport');

    $('.experiencia .group-title').click(function() {



      if (!$(this).closest('.col-lg-4').find('ul').hasClass('popup-open')) {
        $('ul.pop-ups').removeClass('popup-open').slideUp();
        $(this).closest('.col-lg-4').find('ul').addClass('popup-open').slideDown();
      } else {
        if ($(this).closest('.col-lg-4').find('ul').hasClass('popup-open')) {
          $(this).closest('.col-lg-4').find('ul').removeClass('popup-open').slideUp();
        }
      }

      return false;
    });
  }

});