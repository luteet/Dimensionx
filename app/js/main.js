
const body = document.querySelector('body'),
    html = document.querySelector('html'),
    menu = document.querySelectorAll('.header__burger, .header__nav, body'),
    burger = document.querySelector('.header__burger'),
    header = document.querySelector('.header');


body.addEventListener('click', function (event) {

    function $(elem) {
      return event.target.closest(elem)
    }

    // =-=-=-=-=-=-=-=-=-=- <open menu in header> -=-=-=-=-=-=-=-=-=-=-

    if ($('.header__burger')) {
        menu.forEach(element => {
            element.classList.toggle('_active')
        })
    }

    // =-=-=-=-=-=-=-=-=-=- </open menu in header> -=-=-=-=-=-=-=-=-=-=-


    // =-=-=-=-=-=-=-=-=-=-=-=- <scroll on click to section> -=-=-=-=-=-=-=-=-=-=-=-=

    let btnToScroll = $('.btn-to-scroll');
    if(btnToScroll) {
      event.preventDefault();
      let section;
    
      section = document.querySelector(btnToScroll.getAttribute('href'))
    
      menu.forEach(elem => {
        elem.classList.remove('_active')
      })

      let activeLink;
      if(btnToScroll.closest('.btn-to-scroll-wrapper')) {
        activeLink = btnToScroll.closest('.btn-to-scroll-wrapper').querySelectorAll('a')[Number(btnToScroll.dataset.link)];
      } else {
        activeLink = false;
      }
      
    
      if(activeLink) {
        if(activeLink.classList.contains('_current')) {
          window.scroll({
            left: 0,
            top: (section) ? section.offsetTop : 0,
            behavior: 'smooth'
          })
          history.pushState('', "", btnToScroll.getAttribute('href'));
        } else {
          window.location.href = activeLink.getAttribute('href') + btnToScroll.getAttribute('href');
        }
      } else {
        window.scroll({
          left: 0,
          top: (section) ? section.offsetTop : 0,
          behavior: 'smooth'
        })
      }

      
    
    }
    
    // =-=-=-=-=-=-=-=-=-=-=-=- </scroll on click to section> -=-=-=-=-=-=-=-=-=-=-=-=

})

// =-=-=-=-=-=-=-=-=-=-=-=- <resize> -=-=-=-=-=-=-=-=-=-=-=-=

function resize() {

html.style.setProperty("--height-screen", window.innerHeight + "px")
html.style.setProperty("--height-header", header.offsetHeight + "px")

}

resize();

window.onresize = resize;

// =-=-=-=-=-=-=-=-=-=-=-=- </resize> -=-=-=-=-=-=-=-=-=-=-=-=


// =-=-=-=-=-=-=-=-=-=-=-=- <slider> -=-=-=-=-=-=-=-=-=-=-=-=
/*
let slider = new Swiper('.__slider', {
  
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: false,

    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        centeredSlides: true,
    
      },
      600: {
        slidesPerView: 2,
        centeredSlides: false,
      },
    }
}); 
*/
// =-=-=-=-=-=-=-=-=-=-=-=- </slider> -=-=-=-=-=-=-=-=-=-=-=-=


/* 
// =-=-=-=-=-=-=-=-=-=-=-=- <Анимации> -=-=-=-=-=-=-=-=-=-=-=-=

AOS.init({
	//disable: "mobile",
});

// =-=-=-=-=-=-=-=-=-=-=-=- </Анимации> -=-=-=-=-=-=-=-=-=-=-=-=

*/
