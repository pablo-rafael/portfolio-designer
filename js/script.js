// Inicialização do Jquery
$(function(){

    let scrollTarget = '.skills';
    let alreadyRun   = false;

    $(window).on('scroll', (event) => {

      let scrollTop   = $('html, body').scrollTop();
      let elementTop  = $(scrollTarget).offset().top;
      
      if ( (scrollTop >= (elementTop - 300)) && alreadyRun == false ) {
        runRatioAnimator('#barCorelDraw', '#percentCorelDraw', 80);
        runRatioAnimator('#barAdobeillustrator', '#percentAdobeillustrator', 80);
        runRatioAnimator('#barAdobePhotoshop', '#percentAdobePhotoshop', 80);
        runRatioAnimator('#barAdobeIndesign', '#percentAdobeIndesign', 60);
        runRatioAnimator('#barAfterEffects', '#percentAfterEffects', 40);
        runRatioAnimator('#barAdobePremiere', '#percentAdobePremiere', 50);
        alreadyRun = true;
      }

      if ( scrollTop <=  0) {
        runRatioAnimator('#barCorelDraw', '#percentCorelDraw', 0);
        runRatioAnimator('#barAdobeillustrator', '#percentAdobeillustrator', 0);
        runRatioAnimator('#barAdobePhotoshop', '#percentAdobePhotoshop', 0);
        runRatioAnimator('#barAdobeIndesign', '#percentAdobeIndesign', 0);
        runRatioAnimator('#barAfterEffects', '#percentAfterEffects', 0);
        runRatioAnimator('#barAdobePremiere', '#percentAdobePremiere', 0);
        alreadyRun = false;
      }

    })

    function runRatioAnimator (barId, percentId, maxSize) {
      let counter = -1;
      $(barId).animate({'width': `${maxSize}%`}, 1500);
      let startCount = setInterval(()=>{
        counter++
        $(percentId).html(`${counter}%`);
        if ( counter >= maxSize ) {
          clearInterval(startCount);
        }
      }, 5);
    }
    
  });

